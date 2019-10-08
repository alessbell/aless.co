---
title: Working at the Edge
date: '2019-02-18T19:09:59.546Z'
spoiler: Rust and Other Things
keywords: ['Recurse Center', 'programming', 'Rust', 'The Rust Book']
---

At the beginning of January, I found out that I'll be attending the Recurse Center in April for a one week "mini" batch. I can't remember exactly when I first heard about RC, but it was years ago and I'm convinced it was through Julia Evans' [excellent blog](https://jvns.ca/).

RC is often referred to as a "writer's workshop for programmers." In practice, it's a place where programmers go to explore, create and, above all else, learn. There are very few rules (aside from RC's [social rules](https://www.recurse.com/social-rules)), but one one of my favourite unofficial rules comes from Mary Rose Cook's [testimonial](https://maryrosecook.com/blog/post/recurse-center-testimonial):

> There is one constraint: work at the edge of your programming capabilities. Which is to say: work on something that makes you a better programmer.

Sounds simple enough! And, actually, RC asks you point blank about what you plan to work on during the application process, so you'd think I'd have it all figured out by now...

---

As someone who feels most at home wielding browser technologies, I initially pitched an ["explorable explanations"](https://explorabl.es/) project through which I'd examine low level DOM APIs. Truthfully, I needed to meet a self-imposed deadline, and the "what you'll work on" question was the hardest by a factor of 10. Done is better than perfect, etc.

After I got my acceptance email, I started thinking about what I could really use my RC time for. While all of this was rattling around in my head, I came across an [impromptu meetup](https://twitter.com/kosamari/status/1088191984718761984) on Twitter: it was around the corner from my office, and the short lineup included Henry Zhu, Paul Irish and Ashley Williams (!!).

Ashley gave a talk on `wasm-bindgen` ([slides](https://bit.ly/hello-wasm-bindgen)) that really resonated with me: she described Rust as the systems programming language for people without a background in systems programming, and mentioned this deep dive [post](https://hacks.mozilla.org/2018/01/oxidizing-source-maps-with-rust-and-webassembly/) on oxidizing the `source-map` JavaScript library ("oxidizing" being the term of art for rewriting some code in Rust... Rustaceans love their wordplay).

While I'd heard of Wasm (not web _or_ Assembly!) and Rust, I was missing the larger picture of how they might be leveraged together: rewriting hotpaths from unidiomatic, performance-tuned JS to idiomatic Rust, with `wasm-bindgen` providing the bindgings for the bridge. Suddenly it was all making much more sense, and just in time for RC :)

I started reading [The Rust Book](https://doc.rust-lang.org/stable/book/) on a recent vacation, and it's one of the best and most accessible technical books I've come across. I'm half way through, and while I'm new to the language, having a JS background makes the possibilities of Rust + Wasm all the more exciting.

In case I was doubting my inclination toward Rust, one of the other soft rules of RC is to **embrace serendipity**: avoid tunnel vision, and pursue what might otherwise be a passing curiosity. So Rust it is.

Over the next few weeks I'll be posting some of the programs I'm writing, as well as my evolving plans for my project. If any of this is of particular interest, you can drop me a line via email or twitter.
