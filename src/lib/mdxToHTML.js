import { bundleMDX } from 'mdx-bundler'

import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import fs from 'fs'
import path from 'path'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const options = {
  // Use one of Shiki's packaged themes
  // theme: 'one-dark-pro',
  theme: JSON.parse(
    fs.readFileSync(`${__dirname}/src/assets/moonlight-ii.json`, 'utf-8')
  ),

  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('line--highlighted')
  },
  onVisitHighlightedWord(node, id) {
    node.properties.className = ['word']

    if (id) {
      const backgroundColor = {
        v: 'rgb(196 42 94 / 59%)',
        s: 'rgb(0 103 163 / 56%)',
        i: 'rgb(100 50 255 / 35%)',
      }[id]

      const color = {
        v: 'rgb(255 225 225 / 100%)',
        s: 'rgb(175 255 255 / 100%)',
        i: 'rgb(225 200 255 / 100%)',
      }[id]

      if (node.properties['data-rehype-pretty-code-wrapper']) {
        node.children.forEach((childNode) => {
          childNode.properties.style = ''
        })
      }

      node.properties.style = `background-color: ${backgroundColor}; color: ${color};`
    }
  },
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
        options,
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
