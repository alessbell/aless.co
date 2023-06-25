import glob from 'fast-glob'
import * as path from 'path'
import { getAllIssues } from './github'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../content/${articleFilename}`
  )
  console.log(meta)
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx'], {
    cwd: path.join(process.cwd(), 'content'),
  })
  console.log('inside', articleFilenames)

  let articles = await Promise.all(articleFilenames.map(importArticle))
  console.log('articles', articles)
  // fetch closed GitHub issues
  let issues = await getAllIssues()

  return [...articles, ...issues].sort(
    (a, z) => new Date(z.date) - new Date(a.date)
  )
}
