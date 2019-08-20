import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface FrontMatter {
  title: string;
  spoiler: string;
  date: string;
}

interface Article {
  fields: {
    slug: string;
  };
  frontmatter: FrontMatter;
}

interface BlogPostData {
  data: {
    mdx: {
      frontmatter: FrontMatter;
      excerpt: string;
      code: {
        body: string;
      };
    };
    site: {
      siteMetadata: {
        siteUrl: string;
      };
    };
  };
  pageContext: {
    previous: Article;
    next: Article;
  };
  pathContext: {
    slug?: string;
  };
}

const BlogPostTemplate: React.FunctionComponent<BlogPostData> = ({
  data: {
    mdx: { frontmatter, excerpt, code },
    site: {
      siteMetadata: { siteUrl },
    },
  },
  pageContext: { previous, next },
  pathContext: { slug },
}) => (
  <Layout>
    <SEO
      ogImageProp={slug ? `${siteUrl}${slug}twitter-card.jpg` : undefined}
      title={frontmatter.title}
      description={excerpt}
    />
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
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
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
