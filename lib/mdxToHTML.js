import { bundleMDX } from 'mdx-bundler'

import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const rehypeOptions = {
  // Use one of Shiki's packaged themes
  theme: 'one-dark-pro',

  // Keep the background or use a custom background color?
  keepBackground: true,
}

export const toCode = async (post) => {
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
        rehypePrettyCode,
        rehypeOptions,
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
