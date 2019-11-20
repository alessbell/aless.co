const config = {
  siteMetadata: {
    title: `anti/pattern`,
    author: `Alessia Bellisario`,
    siteUrl: `https://aless.co`,
    description: `Alessia Bellisario is a software engineer in NYC writing about code, keyboards and drawing machines`,
    repository: `https://github.com/alessbell/alessbell`,
    commit: process.env.COMMIT_REF || `master`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-tslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://aless.co`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.md', '.mdx'],
        options: {
          defaultLayouts: {
            default: require.resolve('./src/templates/blog-post.tsx'),
          },
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `autolink-header`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: `anti/pattern`,
              author: `Alessia Bellisario`,
              fontColor: `#0000FF`,
              background: require.resolve('./content/assets/base.png'),
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              colorTheme: `Night Owl`,
              extensions: [
                {
                  identifier: `sdras.night-owl`,
                  version: `1.1.3`,
                },
              ],
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `anti/pattern: a blog by alessia bellisario`,
        short_name: `alessia's blog`,
        start_url: '/',
        background_color: '#fff',
        theme_color: '#525dce',
        display: 'standalone',
        icon: 'static/favicon-32x32.png',
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/lib/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
            {
                allMdx(
                  sort: { fields: [frontmatter___date], order: DESC }
                  filter: { frontmatter: { draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      excerpt
                      fields {
                        slug
                      }
                      frontmatter {
                        date(formatString: "MMMM D, YYYY")
                        spoiler
                        title
                      }
                    }
                  }
                }
              }
          `,
            output: '/rss.xml',
            title: 'anti/pattern: a blog by alessia bellisario',
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
};

module.exports = config;
