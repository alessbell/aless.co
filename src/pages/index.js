import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';

import '../css/font-face.css';

const BlogLink = styled(Link)`
  line-height: 1.85rem;
`;

const BlogIndex = ({
  data: {
    allMdx: { edges },
  },
}) => (
  <Layout>
    <SEO
      title="a blog by alessia bellisario"
      keywords={[`blog`, `rust`, `gatsby`, `javascript`, `react`]}
    />
    {edges.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug;
      return (
        <div key={node.fields.slug} style={{ margin: '3rem 0' }}>
          <h3>
            <BlogLink to={node.fields.slug}>{title}</BlogLink>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }} />
        </div>
      );
    })}
  </Layout>
);

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
`;
