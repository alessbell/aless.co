import ReactDOMServer from 'react-dom/server'
import { Feed } from 'feed'
import { writeFile } from 'fs/promises'
import { getMDXComponent } from 'mdx-bundler/client'

import { toCode } from 'lib/mdxToHTML'
import { getAllArticles } from 'lib/getAllArticles'

export async function generateRssFeed() {
  let articles = await getAllArticles()
  let siteUrl = 'https://aless.co'
  let author = {
    name: 'Alessia Bellisario',
    email: 'web@bellisar.io',
  }

  let feed = new Feed({
    title: author.name,
    description: "alessia bellisario's blog",
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss.xml`,
    },
  })

  for (let article of articles) {
    let url = `${siteUrl}/${article.slug}`

    // if we don't already have an MDX Component to render, generate it
    // from the GitHub issues markdown
    if (typeof article.component !== 'function') {
      const { code } = await toCode(article.component)
      article.component = getMDXComponent(code)
    }

    let html = ReactDOMServer.renderToStaticMarkup(
      <article.component isRssFeed />
    )

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    })
  }

  await writeFile('./public/rss.xml', feed.rss2())
}
