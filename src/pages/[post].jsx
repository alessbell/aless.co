import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { ArticleLayout } from '@/components/ArticleLayout'
import { getAllIssues } from '@/lib/github'
import { toCode } from '@/lib/mdxToHTML'

export default function Post({ meta, code }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <ArticleLayout meta={meta}>
      <Component />
    </ArticleLayout>
  )
}

export async function getStaticPaths() {
  const issues = await getAllIssues()
  return {
    paths: issues.map((i) => ({ params: { post: i.slug } })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const issues = await getAllIssues()
  const issue = issues.find((i) => i.slug === params.post)

  if (!issue) {
    return { notFound: true }
  }

  const { code, frontmatter } = await toCode(issue.component)

  return {
    props: {
      meta: issue,
      code,
      frontmatter,
    },
  }
}
