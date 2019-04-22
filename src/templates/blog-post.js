import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';

import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const { previous, next } = this.props.pageContext;
    return (
      <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <h3 style={{ marginTop: 0, marginBottom: 0 }}>
          {post.frontmatter.spoiler}
        </h3>
        <p
          style={{
            display: `block`,
          }}
        >
          {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.code.body}</MDXRenderer>
        <hr />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        spoiler
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`;
