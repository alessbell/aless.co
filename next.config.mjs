import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const options = {
  // Use one of Shiki's packaged themes
  theme: 'one-dark-pro',

  // Keep the background or use a custom background color?
  keepBackground: true,
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    mdxRs: true,
    // syncWebAssembly: true,
    // asyncWebAssembly: true,
    // scrollRestoration: true,
  },
  // webpack: (config) => {
  //   config.experiments = {
  //     layers: true,
  //   }
  //   return config
  // },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
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
    ],
  },
})

export default withBundleAnalyzer(withMDX(nextConfig))
