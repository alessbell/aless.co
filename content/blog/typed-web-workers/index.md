---
title: Typed Web Workers
date: '2020-04-30T19:09:59.546Z'
spoiler: Declaring TypeScript types for Web Workers in a Gatsby app
keywords: ['programming']
---

This post will _eventually_ be about something relatively simple that took a bit of Googling for me to figure out: how to add the correct TypeScript types to a Web Worker written in JavaScript. But first, a word on writing technical blog posts.

### The Blog Post Ideas Hidden in Your Browser History

The best advice I've heard on the topic of coming up with ideas for technical blog posts was from [Write/Speak/Code](https://www.writespeakcode.com/) MC [Angie Jones](https://twitter.com/techgirl1908) at the 2018 conference.

> Quick plug for Write/Speak/Code: it's one of the best conferences I've been to! It's a conference for technologists with marginalized genders; if that describes you, I recommend you check it out.

Back to Angie's advice. The brilliance of Write/Speak/Code is that it mixes top notch professional development talks and panels with hands-on workshops. You hear from experts like Angie, someone who has maintained a popular technical blog for years, get some tips on how to get started and then you **do the thing**: in this case, you start writing a technical blog post and workshopping it with peers in the room. I can't overstate what a great experience it was.

To come up with ideas for blog post material, Angie said we only needed to look as far as our browser histories. We're all experts in our experiences: that means we don't need to wait for an earth-shattering technical revelation to get writing, we just need to pick the last thing that stumped us and drove us down a Stack Overflow rabbit hole, or sent us trawling through closed GitHub issues to find a topic we can shed some light on. (That is, assuming we've already come out on the other side 😂).

If nothing else, she noted, her blog posts often helped Future Angie, who'd sometimes find herself Googling the same tricky issue years later only to come across a blog post she'd written!

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
