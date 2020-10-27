---
title: Building a Gatsby Plugin with Wasm
date: '2020-01-06T19:09:59.546Z'
spoiler: Rust + Wasm + Node.js = 🦀🕸💚
keywords: ['programming']
---

> **Law of the Instrument**: "I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail." - Abraham Maslow, 1966

<!-- ![Proof of concept: generating my first Open Graph images for Twitter cards with Rust and WebAssembly](./demo2.png) -->
<Image src="/blog/gatsby-wasm-plugin/demo2.png" width="400">

## The Problem

Back in August, I was looking to generate some [Open Graph](https://ogp.me/) images for blog posts I was publishing to this very Gatsby site (as in the photos that appear when one of my posts is shared in most social apps). The idea is simple: **take each post's metadata** and **create images containing some text** (title, author, site name) at build time.

I had some requirements in mind: I wanted to supply a **custom font**, and if that wasn't possible, at least use a **monospace font** (for the personal `#brand`). A custom background image would be a bonus.

I couldn't find an existing solution that met these requirements, so I set out to build my own. Some interesting constraints led me to Rust and WebAssembly, though I also admittedly found myself holding a Rust-and-Wasm-shaped hammer after working with both technologies to build an interactive web app at [RC](https://recurse.com).

## Why WebAssembly?

The prior art for Open Graph image generator plugins in the Gatsby space consists mainly of `gatsby-remark-social-cards`. I came across some [other](https://github.com/sw-yx/swyxdotio/tree/master/screenshot-plugin) [approaches](https://lannonbr.com/blog/2019-11-10-og-images/) that involve writing bespoke code to achieve more complex layouts by rendering some HTML on the server and using Puppeteer to take screenshots, but these felt too heavy-handed for my use case.

After taking a look through the README, `gatsby-remark-social-cards` fit all my criteria **except for the font** (it only supports DejaVuSansCondensed). This is for a purely practical reason: the main library for image processing in Node.js _with zero native dependencies_ is [`jimp`](https://www.npmjs.com/package/jimp). And `jimp` only supports **bitmap fonts**.

## Bitmap Fonts

<Image src="/blog/gatsby-wasm-plugin/bitmap-font.jpg" width="400">

Bitmap fonts are comprised of a matrix of pixels, so they can't be scaled or styled like vector/"scalable" fonts (think TTF/OTF). In practice, this means a standalone font file is needed for every combination of font size, color and weight. Indeed, the plugin I was examining had a `/fonts` folder containing **twenty different `.fnt` files** for a single typeface styled twenty different ways 😲

### Aside: Netlify Build Image

I generate this site with Netlify and its build image includes native dependencies [`graphicsmagick`](https://github.com/netlify/build-image/blob/xenial/Dockerfile#L59) and [`imagemagick`](https://github.com/netlify/build-image/blob/xenial/Dockerfile#L63), so I could have used a Node library like `gm` to render text in the vector font of my choice. I didn't want one of my Gatsby plugin's dependencies to require native dependencies, however, even if it would work out of the box for me and other Netlify users.

Alas, I was back at square one: `jimp` + bitmap fonts. The thought of having to download a program to generate a bitmap font file for every text style I wanted to try was deeply unappealing, not to mention the lack of configurability for users of my plugin, the very problem that set me down this path in the first place... There had to be a better way™️ Which brings us back to Rust+WebAssembly.

## Step 1: Write Rust

I've been learning Rust on and off over the past year, and while I'm familiar with many aspects of the language, though still a relative beginner, I knew exactly nothing about low level text layout when starting this project. I picked a _crate_ (synonymous with "library" or "package" in other languages) that seemed to handle my use case called [`fonterator`](https://docs.rs/fonterator/0.6.0/fonterator/), grabbed the example code from the docs and used [this template](https://github.com/rustwasm/wasm-pack-template) to spin up a Rust + Wasm project with `wasm-pack`.

The `fonterator` demo uses the crate to render some text in English and Korean and finally calls:

```rust
std::fs::write("out.png", out_data).expect("Failed to save image");
```

`std::fs::write` is a function in the Rust standard library that writes to a file, as you'd expect. It saved `out.png` to my machine when I compiled and ran the Rust program locally 🎉

## Rust → Wasm

The next step was to annotate my Rust function with `#[wasm_bindgen]`, compile my Rust to WebAssembly and call the function via generated JavaScript interface from my Node script. Nothing else about my code was changing, and if all went well, I'd still get my `out.png`!

Not so fast:

```rust
Error: operation not supported on wasm yet
```

Oops. When compiling Rust for the `wasm32-unknown-unknown` target, the Rust standard library can only assume the WebAssembly instruction set, and since Wasm provides no means of doing I/O, these stubs are left to return errors in the standard library.

The Rust and WebAssembly book has a helpful section on how to add Wasm support to a general-purpose Rust crate. The first tip: [avoid performing I/O directly](https://rustwasm.github.io/book/reference/add-wasm-support-to-crate.html#avoid-performing-io-directly) 😀

> Why is the target called `wasm32-unknown-unknown`? `wasm32` means the address space is 32-bits large, the first `unknown` refers to the system the code is compiling on, and the second refers to the system being targeted: `unknown-unknown` implies "compile on almost any machine, run on almost any machine."

## Uint8Array All Day

Since I can't perform I/O from my Rust-generated Wasm, I'd have to pass in the font as a `Uint8Array` and return a `Uint8Array` buffer of rendered text. The Rust API I settled on looks like this:

```rust:title=src/lib.rs
#[wasm_bindgen]
pub fn generate_text(
    title: &str,
    author: &str,
    title_font_size: i32,
    subtitle_font_size: i32,
    rgb: JsValue,
    font_style: &str,
    font_file: Uint8Array,
) -> Vec<u8> {
  // ...
}
```

`generate_text` takes the strings to be rendered and some config: font sizes, RGB value for text color passed in as a `JsValue` converted to a Rust tuple and either a string to set the font style using preselected open source fonts or a TTF font as `Uint8Array`. It then lays out the text, draws the glyphs to a dynamic image backed by a buffer of RGBA pixels and returns a `Vec<u8>` buffer of pixel data.

### Publishing Wasm

Once you're done writing your Rust, publishing your Wasm couldn't be easier: the CLI `wasm-pack` generates the Wasm module, all the JS glue, TypeScript types _and_ publishes to the npm registry 🤘 I blinked and had published [`wasm-twitter-card`](https://github.com/alessbell/wasm-twitter-card/).

## Putting It All Together

I could then require my Wasm module and call `generate_text` like any regular JS function. This is the meat of my Gatsby plugin [`gatsby-remark-twitter-cards`](https://github.com/alessbell/gatsby-remark-twitter-cards): it uses `fs.readFileSync` to read a TTF font to a buffer passed to our Wasm code.

```js
const Jimp = require('jimp');
const twitterCard = require('wasm-twitter-card');

// utility functions for reading/initializing jimp images

module.exports = ({ markdownNode }, config) => {
  const fontToUint8Array = fs.readFileSync(require.resolve(config.fontFile));
  const buffer = twitterCard.generate_text(
    post.title,
    // ...
    fontToUint8Array
  );
  return Promise.all([generateBackground(), writeTextToCard(buffer)])
    .then(([base, text]) => base.composite(text, 0, 0))
    .then((image) =>
      image
        .writeAsync(output)
        .then(() => console.log('Generated Twitter Card: ', output))
        .catch((err) => err)
    )
    .catch(console.error);
};
```

I no longer needed to use bitmap fonts, but `jimp` was the perfect library to stitch everything together. I was amazed at how easy it was: I **initialized a Jimp image for the card background** from the user-provided image (or created one consisting of a solid color), then called my Wasm function and **read the text as a buffer of pixel data into a second Jimp image**. Finally, I'd **composite the latter over the former**, a one-liner with `jimp`, save the final image and voilà.

<!-- ![The resulting image for this post, using the same typeface and gradient that appear elsewhere on this website 😍](./twitter-card.png) -->
<Image src="/blog/gatsby-wasm-plugin/twitter-card.png" width="400">

Once I saw the result, I was glad I had ventured down this particular rabbit hole!

## Missing Glyphs

There were a few bumps along the road, mainly falling into the category of missing or incorrectly rendered glyphs:

<!-- ![The image on the left is supposed to say "2019", while the image on the right is missing glyphs "d", "q" and "w"](./glitches.png) -->
<Image src="/blog/gatsby-wasm-plugin/glitches.png" width="400">

After some head scratching, I chalked it up to a bug in `fonterator` and moved to `rusttype` as my underlying text rendering crate which fixed things (I would also realize I needed something like `glyph_brush_layout` to handle layout/text wrapping). I still don't know exactly what the issue with `fonterator` was, but I received the following thoughtful comment from the folks at the font editor FontForge via Twitter:

> I would check the directionality of the glyphs in your image. I noticed that "b" and "p" are OK, yet "d" and "q" are not. I think the problem is that splines which should be clockwise are counter, and those which should be counter are clockwise. Try e.g. "Correct Direction".

I still lack some context here, but I'd love to dig in and try to find the fix. If anyone has any ideas, let me know!

## Conclusion

This was a fun and unexpected introduction to solving a real world problem with emerging tech I remain fascinated by.

A few takeaways:

- The partially self-imposed constraints made this more fun! A native dependency-free solution was in the cards after all thanks to WebAssembly.
- The complexity that underlies rendering 2D text to screens is humbling once you scratch the surface. It's too often and too easily taken for granted.
- Rust is a vast language that has introduced me to many new concepts, chief among them the ownership model of memory management. There is a dauntingly long list of language features I have yet to master (lifetimes! [turbofish!](https://turbo.fish/) 😉), but I don't need to master them all to start writing Rust. I can start with the parts I need, and go from there.
