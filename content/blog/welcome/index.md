---
title: welcome to my weblog
date: '2019-02-18T19:09:59.546Z'
spoiler: Rust and other things
---

For a little over four years, I've been working as a full stack web developer doing mostly React/Node.js things at a company called [Breather](https://breather.com). Before I entered tech, I was classically trained in the 90s school of Neopets/Geocities dev, dabbled in WordPress freelancing and eventually attended a Rails bootcamp in 2014 when I decided I wanted to program full-time.

I wrote a bit [about](https://medium.com/@alessbell/from-bitmaker-to-breather-a-quickstart-guide-to-making-things-on-the-internet-1f050a0392cf) [my](https://medium.com/@alessbell/coding-and-camaraderie-b190007d419e) [bootcamp journey](https://medium.com/@alessbell/hello-world-b23c3cbc976f) almost five (😱) years ago, but Medium has paywalls now and building a blog is a fun and absolutely necessary prerequisite to ever writing anything! I had some fun writing this blog using Gatsby, MDX, Netlify and `gl-react` for the cool title gradient loop (source [here](https://github.com/alessbell/alessbell) if you're curious), so here we are.

At the beginning of January I found out that I'll be attending the Recurse Center in April for a one week "mini" batch. I can't remember exactly when I first heard about RC, but it was years ago and I'm convinced it was through Julia Evans' [excellent blog](https://jvns.ca/). RC is often referred to as a "writer's workshop for programmers." In practice, it's a place where programmers go to explore, create and, above all else, learn. There are very few rules (aside from RC's [social rules](https://www.recurse.com/social-rules), which are great), but one one of my favourite unofficial rules comes from Mary Rose Cook's [testimonial](https://maryrosecook.com/blog/post/recurse-center-testimonial):

> There is one constraint: work at the edge of your programming capabilities. Which is to say: work on something that makes you a better programmer.

Sounds simple enough! And, actually, RC asks you point blank about what you plan to work on during the application process, so you'd think I'd have this all figured out by now...

As someone who feels most at home wielding browser technologies, I initially pitched an ["explorable explanations"](https://explorabl.es/) project through which I'd closely examine low level DOM APIs. Truthfully, I needed to meet a self-imposed deadline, and the "what you'll work on" question was the toughest one by a factor of 10. Done is better than perfect, etc.

After I got my acceptance email, I started thinking about what I could really use my RC time for. While all of this was rattling around in my head, I came across an [impromptu meetup](https://twitter.com/kosamari/status/1088191984718761984) on Twitter: it was around the corner from my office, and the lineup included Henry Zhu, Paul Irish and Ashley Williams (!!).

Ashley gave a talk on `wasm-bindgen` ([slides](https://bit.ly/hello-wasm-bindgen)) that really resonated with me: she described Rust as the systems programming language for people without a background in systems programming, and linked to [this post](https://hacks.mozilla.org/2018/01/oxidizing-source-maps-with-rust-and-webassembly/) on oxidizing the `source-map` JavaScript library ("oxidizing" being the term of art for rewriting some code in Rust... Rustaceans love their wordplay).

```rust
fn main() {
    let v = vec![1, 2, 3];

    v[99];
}

```
