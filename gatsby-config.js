let goodreadsConfig;

try {
  // Load the Contentful config from the .contentful.json
  goodreadsConfig = require('./.goodreads');
} catch (_) {
  // empty
}

// Overwrite the Goodreads config with environment variables if they exist
goodreadsConfig = {
  developerKey: process.env.GOODREADS_KEY || goodreadsConfig.developerKey,
};

const { developerKey } = goodreadsConfig;

if (!developerKey) {
  throw new Error('Goodreads developerKey needs to be provided.');
}

const config = {
  plugins: [
    `@pauliescanlon/gatsby-mdx-embed`,
    {
      resolve: `gatsby-source-goodreads`,
      options: {
        developerKey,
        goodReadsUserId: `108030826`,
        userShelf: `currently-reading`,
      },
    },
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
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: `anti/pattern`,
              titleFontSize: 105,
              author: `Alessia Bellisario`,
              background: require.resolve('./content/assets/base.png'),
              fontFile: require.resolve(
                './src/fonts/GT-Pressura-Mono-Bold.ttf'
              ),
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
            },
          },
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: `Synthwave '84`,
                parentSelector: {
                  '.dark': `Synthwave '84`,
                  '.light': `Bluloco Light`,
                },
                media: [
                  {
                    match: '(prefers-color-scheme: dark)',
                    theme: `Synthwave '84`,
                  },
                ],
              },
              extensions: [`synthwave-vscode`, `theme-bluloco-light`],
            },
          },
        ],
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
              return allMdx.edges.map((edge) => {
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
            title: 'anti/pattern: A blog by Alessia Bellisario',
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
};

module.exports = config;
