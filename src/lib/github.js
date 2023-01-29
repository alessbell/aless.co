const toSlug = (str) =>
  str
    .replace(/ \./g, ' ')
    .replace(/ \/ /g, '-')
    .replace(/ /g, '-')
    .replace(/#/g, '')
    .toLowerCase()

const api = async (url) => {
  const baseUrl = 'https://api.github.com'
  const data = await fetch(`${baseUrl}/${url}`, {
    headers: {
      Accept: `application/vnd.github+json`,
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  }).then((res) => res.json())
  return data
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
  let issues = await api(
    'repos/alessbell/aless.co/issues?state=closed&creator=alessbell'
  )
  return preparePosts(issues)
}
