import { cache } from './cache'
// const GITHUB_TOKEN = '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'

const toSlug = (str) =>
  str
    .replace(/ \./g, ' ')
    .replace(/ \/ /g, '-')
    .replace(/ /g, '-')
    .replace(/#/g, '')
    .toLowerCase()

const api = async (url) => {
  if (cache.has(url)) {
    return cache.get(url)
  } else {
    const baseUrl = 'https://api.github.com'
    const data = await fetch(`${baseUrl}/${url}`).then((res) => res.json())
    cache.set(url, data)
    return data
  }
}

const preparePosts = (posts) => {
  return posts
    .filter((p) => !p.pull_request)
    .filter((p) => p.author_association === 'OWNER')
    .map((p) => ({
      // id: p.id,
      component: p.body,
      // normalize date by removing time (chars after the T in UTC timestamp)
      date: p.closed_at.replace(/T.*$/, ''),
      title: p.title,
      description: '',
      author: 'Alessia Bellisario',
      slug: toSlug(p.title),
    }))
}

export async function getAllIssues() {
  let issues = await api('repos/alessbell/aless.co/issues?state=closed')
  return preparePosts(issues)
}
