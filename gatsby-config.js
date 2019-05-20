const config = {
  siteMetadata: {
    title: `anti/pattern`,
    author: `Alessia Bellisario`,
    siteUrl: 'https://aless.co',
    description: `Alessia Bellisario is a programmer working on the web in New York City`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-flow`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
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
                        date(formatString: "MMMM DD, YYYY")
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
    `gatsby-plugin-remove-serviceworker`,
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
