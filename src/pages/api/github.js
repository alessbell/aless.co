import { getAllIssues } from '@/lib/github'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  let issues = await getAllIssues()

  return new Response(
    JSON.stringify({
      issues,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
      },
    }
  )
}
