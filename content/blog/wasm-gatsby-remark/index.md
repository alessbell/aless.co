---
title: Open Graph Images with Rust + Wasm
date: '2020-01-04T19:09:59.546Z'
spoiler: Rust + Wasm + Node.js = 🦀🕸🎉
keywords: ['programming']
---

![My first proof of concept: generating Open Graph images for Twitter cards with Rust and WebAssembly](./demo2.png)

> **Law of the Instrument**: "I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail." - Abraham Maslow, 1966

I began learning Rust almost a year ago. I was inspired to pick up The Rust Book after I found myself in the audience of [a talk](/working-at-the-edge) on [`wasm-bindgen`](https://rustwasm.github.io/docs/wasm-bindgen/) and realized I could build things with Rust that were relevant to me, a person who builds for the web. At the Recurse Center in April 2019, I used `wasm-bindgen` to build an interactive web app with Rust + Wasm + JS for making generative art that morphs as it tracks the user's cursor and had my first taste of what was possible with WebAssembly.

## The Problem

This post is the tale of solving a seemingly trivial problem: I wanted to generate some JPGs for my Gatsby blog posts' Open Graph images. This would involve **taking each post's metadata** and **creating images containing some text (title, author, site name) at build time**. Crucially, I wanted to use a custom font, but if I couldn't, at the very least I wanted something monospace (for the personal `#brand`).

I had some interesting constraints that led me toward Rust and WebAssembly; I was also holding a Rust-and-Wasm-shaped hammer. In the end, I wrote two bespoke pieces of code that did exactly what I wanted, and generalized them enough to release two packages: [`wasm-twitter-card`](https://www.npmjs.com/package/wasm-twitter-card) wherein I use `wasm-bindgen` to write idiomatic Rust that handles text layout and automatically maps to an idiomatic JS function signature, and [`gatsby-remark-twitter-cards`](https://www.npmjs.com/package/gatsby-remark-twitter-cards), a small plugin that takes blog post metadata, passes it to my Wasm lib, and generates and saves the resulting images.

---

In early 2019, I assembled the first version of this Gatsby site and decided to start blogging. One of my 2019 goals was to write more; in the end, I averaged one post per quarter. Not too shabby!

After making the final few edits to a post, the most satisfying part is putting it out into the world. It didn't take long to realize that I wanted to leverage the [Open Graph protocol](https://ogp.me/) to enhance the preview of my posts as they would appear, unfurled, in most social apps.

If you're not familiar with the OG protocol:

> \[it] enables any web page to become a rich object in a social graph... To turn your web pages into graph objects, you need to add basic metadata to your page.

For example, the Open Graph metadata for this post looks like this:

```html
<html lang="en">
  <head>
    <title>Gatsby Open Graph Images with Rust + Wasm | anti/pattern</title>
    <meta
      property="og:title"
      content="Gatsby Open Graph Images with Rust + Wasm"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://aless.co/wasm-gatsby-remark/twitter-card.jpg"
    />
    ...
  </head>
  ...
</html>
```

Before

## Gatsby

The Gatsby ecosystem is wonderful (disclosure: I'm a fan) and Gatsby sites are _highly_ configurable, but you don't get a fully formed blog out of the box. Luckily, there are starter projects and plugins for everything from blogs with RSS feeds to Open Graph metadata!

I had configured my Gatsby blog to use [MDX](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/) (Markdown + JSX, not the luxury SUV) and [Remark](https://remark.js.org/) (process and compile Markdown using plugins). As soon as I went searching for a plugin for generating OG social cards, I found [`gatsby-remark-social-cards`](https://github.com/syntra/gatsby-remark-social-cards#readme).

Easy enough! The Gatsby ecosystem is overflowing with useful plugins, and I figured OG tags would be no different. I was right

---

The story of making `gatsby-remark-twitter-cards`: I wanted a simple plugin to generate twitter card images, and found the existing solution to be alllmost what I wanted.

Upon closer inspection I didn't like the existing font choices, and the only way to change the font would be to fork the library and create my own bitmap fonts.

- Isn't this possible in Node.js? Well, not really: there's jimp which works with bitmap fonts, and I could use imagemagick but that would require installing more dependencies/having more complicated build steps, and I just wanted to use Netlify...
- Recurse Center: I learned about Rust + Wasm, but I built something purely for fun. This time I was trying to solve a very specific problem.
- starting out, bitmap fonts??
- different targets: https://stackoverflow.com/questions/53304832/loading-a-file-from-wasm aka can't save to the file system from wasm
- wasm-bindgen?? https://hacks.mozilla.org/2018/04/javascript-to-rust-and-back-again-a-wasm-bindgen-tale/
- js_sys?? Uint8Array.to_vec https://rustwasm.github.io/wasm-bindgen/api/js_sys/struct.Uint8Array.html#method.to_vec
- fs.readFileSync for reading a file to a buffer https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
- glyph_brush https://github.com/alexheretic/glyph-brush
- can I make something with Wasm?
- buffers??? how to return a bunch of pixels?
- base64??
- WOO it's working
- now how to add a background image??
- how to pass in RGB values
- how to pass in a font when you can't use a dynamic path to a file: you turn the file into a Uint8Array and pass that
- `wasm-pack` to publish NPM package

What did I learn:

- fonts are pretty incredible: there is plenty of complexity when it comes to laying out/rendering text... just as Raph Levien
- Rust is a vast language that introduces new concepts for many developers (ownership model of memory management), and that's great. You don't need to understand every Rust API to start writing it, just start with the parts you need and get building.

```rust
pub fn generate_text(title: &str, author: &str, title_font_size: i32, rgb: (i32, i32, i32)) -> Vec<u8> {
  const SUBTITLE_FONT_SIZE: f32 = 60.0;
}
```

```bash
error[E0277]: the trait bound `(i32, i32, i32): wasm_bindgen::convert::traits::FromWasmAbi` is not satisfied
--> src/lib.rs:13:1
|
13 | #[wasm_bindgen]
| ^^^^^^^^^^^^^^^ the trait `wasm_bindgen::convert::traits::FromWasmAbi` is not implemented for `(i32, i32, i32)`

error: aborting due to previous error
```
