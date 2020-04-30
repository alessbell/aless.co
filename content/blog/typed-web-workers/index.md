---
title: Typed Web Workers
date: '2020-04-30T19:09:59.546Z'
spoiler: Declaring TypeScript types for Web Workers in a Gatsby app
keywords: ['programming']
---

This post is about something that's ultimately pretty simple but still took a bit of fiddling for me to figure out: how to come up with the correct TypeScript type for a Web Worker written in JavaScript. But first, a word on writing technical blog posts.

The best advice I've heard on the topic of coming up with ideas for technical blog posts was from [Write/Speak/Code](https://www.writespeakcode.com/) MC [Angie Jones](https://twitter.com/techgirl1908) at the 2018 conference.

> Quick plug for Write/Speak/Code: it's one of the best conferences I've been to! It's a conference for technologists with marginalized genders; if that describes you, I recommend you check it out.

The genius of the conference is that it mixes professional development talks and panels with hands-on workshops. You hear from experts like Angie, someone who has maintained a popular technical blog for years, get some tips on how to get started and then you **do the thing**: in this case, you start writing a blog post and workshopping it with peers in the room. I can't overstate what a great experience it was.

### The Blog Post Ideas Hidden in Your Browser History

To come up with ideas for material, Angie said we only needed to look as far as our browser histories. We're all experts in our experiences: that means we don't need to wait for an earth-shattering revelation to get writing. We just need to pick the last thing that stumped us and drove us down a Stack Overflow rabbit hole or sent us trawling through piles of closed GitHub issues to find a topic we can shed some light on. (That is, assuming we've already come out on the other side. If not: we've got this, the answer is probably one _extremely_ specific search query away.)

If nothing else, she noted, her blog posts often helped Future Angie who would sometimes find herself facing the same issue years later only to come across a blog post she'd written!

It is in that spirit--of helping Future Alessia--that I'm writing this post.

## Back to Web Workers

I found myself reaching for a Web Worker recently. I was building some data vizualizations from raw CSVs, and in building the prototype I had to do a bunch of data wrangling, committing various JavaScript crimes in the process. Long story short, I introduced some significant lag on page load.

The computations I was doing were perfectly suited to happen off of the browser's main thread, so as not to interfere with the other graphs I needed to start rendering. Web Workers to the rescue!

I was working on a Gatsby site and a quick search revealed, indeed, **there's a loader plugin for that**: [`gatsby-plugin-workerize-loader`](https://github.com/universse/gatsby-plugin-workerize-loader). It doesn't do anything too fancy, just adds `workerize-loader` to your Webpack config and injects the worker scripts in `gatsby-ssr.js`.

The plugin [docs](https://github.com/universse/gatsby-plugin-workerize-loader#gatsby-plugin-workerize-loader) demonstrate how to write a worker file with the expected suffix `.worker.js` in which you export your async function(s):

```javascript
// computeData.worker.js

export async function generateSeries(data) {
  const series = [];
  for (const [key, value] of Object.entries(data)) {
    // do expensive calculations
  }
  return series;
}
```

Then, in another file—something the docs refer to as a "source file"—you can import and instantiate the Web Worker. (They only work in the browser, so in a Gatsby project you have to check that the window object is defined.)

```typescript
// computeDataWorker.ts

import DataWorker from './computeData.worker.js';
const dataWorker = typeof window === 'object' && new DataWorker();
export default dataWorker;
```

### Web Workers + TS

In the docs, the example source file that imports the worker and instantiates it is a JavaScript file, but I happened to be working in a TypeScript project, so I gave it the `.ts` extension.

At this point, I knew I'd have to add some types for the functions my worker is exporting. After flipping through some docs, I added a sibling declaration file, `computeData.worker.d.ts`, and declared a class that extends TypeScript's built-in `Worker` interface. It just needs a `constructor` and the type definitions for the functions I'm exporting, which return Promises.

Put it all together and you've got:

```typescript
// computeData.worker.d.ts

declare class ComputeDataWebWorker extends Worker {
  constructor();

  generateSeries(data: {
    [key: string]: number;
  }): Promise<{ name: AnalysisYears; data: number[] }[]>;

  sumDailyTotals(
    data: Point[],
    column: 'Demand__MW_' | 'Net_Generation__MW_'
  ): Promise<{ [key: string]: number }>;
}

export default ComputeDataWebWorker;
```

Ta da 🌼 Type-safe Web Workers in your Gatsby app.
