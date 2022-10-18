import React from 'react'
import Head from 'next/head'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'

import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import { ArticleLayout } from '@/components/ArticleLayout'
import { getAllIssues } from '@/lib/github'

const toCode = async (post) => {
  const { code, frontmatter } = await bundleMDX({
    source: post,
    mdxOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ]
      return options
    },
  })
  return { code, frontmatter }
}

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
