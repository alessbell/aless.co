import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPostTemplate = ({
  data: {
    mdx: { frontmatter, excerpt, code },
  },
  pageContext: { previous, next },
}) => (
  <Layout>
    <SEO title={frontmatter.title} description={excerpt} />
    <h2>{frontmatter.title}</h2>
    <h3 style={{ marginTop: 0, marginBottom: 0 }}>{frontmatter.spoiler}</h3>
    <p
      style={{
        display: `block`,
      }}
    >
      {frontmatter.date}
    </p>
    <MDXRenderer>{code.body}</MDXRenderer>
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

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        spoiler
        date(formatString: "MMMM D, YYYY")
      }
      code {
        body
      }
    }
  }
`;
