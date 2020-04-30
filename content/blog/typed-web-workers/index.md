---
title: Typed Web Workers
date: '2020-04-30T19:09:59.546Z'
spoiler: Declaring TypeScript types for Web Workers in a Gatsby app
keywords: ['programming']
---

This post is about something that's ultimately pretty simple but still took a bit of trial and error for me to figure out: how to come up with the correct TypeScript type for a Web Worker written in JavaScript. But first, a word on writing technical blog posts.

The best advice I've heard on the topic of coming up with ideas for technical blog posts was from [Write/Speak/Code](https://www.writespeakcode.com/) MC [Angie Jones](https://twitter.com/techgirl1908) at the 2018 conference.

> Quick plug for Write/Speak/Code: it's one of the best conferences I've been to! It's a conference for technologists with marginalized genders; if that describes you, I recommend you check it out.

Back to Angie's advice. The brilliance of the conference is that it mixes professional development talks and panels with hands-on workshops. You hear from experts like Angie, someone who has maintained a popular technical blog for years, get some tips on how to get started and then you **do the thing**: in this case, you start writing a blog post and workshopping it with peers in the room. I can't overstate what a great experience it was.

### The Blog Post Ideas Hidden in Your Browser History

To come up with ideas for material, Angie said we only needed to look as far as our browser histories. We're all experts in our experiences: that means we don't need to wait for an earth-shattering revelation to get writing. We just need to pick the last thing that stumped us and drove us down a Stack Overflow rabbit hole or sent us trawling through piles of closed GitHub issues to find a topic we can shed some light on. (That is, assuming we've already come out on the other side. If not: we've got this, the answer is probably one _extremely_ specific search query away.)

If nothing else, she noted, her blog posts often helped Future Angie, who'd sometimes find herself facing the same tricky issue years later only to come across a blog post she'd written!

It is in that spirit--of helping Future Alessia--that I'm writing this post.

### Web Workers

I have limited experience leveraging web workers, but I found myself reaching for one recently. I was building some data vizualizations from raw CSVs, and in building the prototype I had to do a bunch of data wrangling, munging and the like in JS-land. Long story short, I introduced some significant lag on page load. Web Workers to the rescue!

I was working on a Gatsby site, and a quick search revealed, indeed, there is a loader plugin for that: [`gatsby-plugin-workerize-loader`](https://github.com/universse/gatsby-plugin-workerize-loader). It doesn't do anything too fancy, just adds `workerize-loader` to your Webpack config and injects the worker scripts in `gatsby-ssr.js`.

```javascript
// computeData.worker.js

export async function formatData(data, toggle) {
  return data.reduce((acc, cur) => {
    //
  }, {});
}

export async function generateSeries(data) {
  for (const [key, value] of Object.entries(data)) {
    const [month, day, year] = key.split('/');
    // ...
  }
}
```

```typescript
// computeData.worker.d.ts

declare class ComputeDataWebWorker extends Worker {
  constructor();
  formatData(
    data: DataPoint[],
    toggle: 'Demand__MW_' | 'Net_Generation__MW_'
  ): Promise<{ [x: string]: number }>;
  generateSeries(data: {
    [x: string]: number;
  }): Promise<{ name: AnalysisYears; data: number[] }[]>;
}

export default ComputeDataWebWorker;
```

```typescript
// computeDataWorker.ts

import ComputeDataWorker from './computeData.worker.js';

const computeDataWorker = typeof window === 'object' && new ComputeDataWorker();

export default computeDataWorker;
```
