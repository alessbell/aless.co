---
title: Wasm / Gatsby / Remark
date: '2019-08-21T19:09:59.546Z'
spoiler: Stuff and things
keywords: ['programming', 'rust']
---

## Bullet points on post I'm going to write

- starting out, bitmap fonts??
- can I make something with Wasm?
- buffers??? how to return a bunch of pixels?
- base64??
- WOO it's working
- now how to add a background image??
- ## how to pass in RGB values

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
