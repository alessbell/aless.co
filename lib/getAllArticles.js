import glob from 'fast-glob'
import * as path from 'path'
import { getAllIssues } from './github'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(`../pages/${articleFilename}`)
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  // fetch closed GitHub issues
  let issues = await getAllIssues()

  return [...articles, ...issues].sort(
    (a, z) => new Date(z.date) - new Date(a.date)
  )
}
