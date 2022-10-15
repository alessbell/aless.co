import React from 'react'
import { bundleMDX } from 'mdx-bundler'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import { getMDXComponent } from 'mdx-bundler/client'
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
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism]

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

export async function getServerSideProps(context) {
  const issues = await getAllIssues()
  const issue = issues.find((i) => i.slug === context.params.post)
  const { code, frontmatter } = await toCode(issue.component)

  return {
    props: {
      meta: issue,
      code,
      frontmatter,
    }, // will be passed to the page component as props
  }
}
