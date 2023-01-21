import ReactDOMServer from 'react-dom/server'
import { Feed } from 'feed'
import fs from 'fs'

import { getAllArticles } from './getAllArticles'

export async function generateRssFeed() {
  let articles = await getAllArticles()
  let siteUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  let author = {
    name: 'Alessia Bellisario',
    email: 'web@bellisar.io',
  }

  let feed = new Feed({
    title: author.name,
    // description: 'Your blog description',
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

  fs.writeFileSync('./public/rss.xml', feed.rss2())
}
