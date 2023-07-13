import React from 'react'
import { notFound } from 'next/navigation'
import { getAllArticles } from '~/lib/getAllArticles'

export async function generateStaticParams() {
  const issues = await getAllArticles()
  return issues.map((i) => ({ params: { slug: i.slug } }))
}

export default async function Post({ params }) {
  const issues = await getAllArticles()
  const issue = issues.find((i) => i.slug === params.slug)

  if (!issue) {
    notFound()
  }

  const Component = issue.component
  return <Component />
}
