const config = {
  siteMetadata: {
    title: `anti/pattern`,
    author: `Alessia Bellisario`,
    siteUrl: `https://aless.co`,
    description: `Alessia Bellisario is a software engineer working on the web in New York City`,
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
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-tslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
              showCaptions: true,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`],
      },
    },
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
                allMdx(limit: 1000, sort: { fields: [frontmatter___date], order: DESC }) {
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

if (process.env.CONTEXT === 'production') {
  const googleAnalyticsConfig = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: `UA-31075901-1`,
    },
  };
  config.plugins.push(googleAnalyticsConfig);
}

module.exports = config;
