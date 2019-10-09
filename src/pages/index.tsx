import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { BlogLink } from '../components/styles';

export interface Edge {
  node: {
    frontmatter: {
      title: string;
      spoiler: string;
      date: string;
    };
    fields: {
      slug: string;
    };
  };
}

export interface BlogIndexProps {
  data: {
    allMdx: {
      edges: Edge[];
    };
  };
}

const BlogIndex: React.FunctionComponent<BlogIndexProps> = ({
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
        <div key={node.fields.slug} style={{ margin: '2.5rem 0' }}>
          <h3>
            <BlogLink to={node.fields.slug}>{title}</BlogLink>
          </h3>
          <p
            style={{ marginBottom: 0 }}
            dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
          />
          <small>
            <i>{node.frontmatter.date}</i>
          </small>
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
            date(formatString: "MMMM D, YYYY")
            spoiler
            title
          }
        }
      }
    }
  }
`;
