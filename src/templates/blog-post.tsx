import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import { MDXSharpImg, MDXSrcImg, safeFluid } from '../components/images';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface FrontMatter {
  title: string;
  images: [];
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
  };
  pageContext: {
    previous: Article;
    next: Article;
  };
}

const BlogPostTemplate: React.FunctionComponent<BlogPostData> = ({
  data: {
    mdx: { frontmatter, excerpt, code },
  },
  pageContext: { previous, next },
}) => {
  const imgs: { [k: string]: React.ReactNode } = {};
  if (frontmatter.images) {
    console.log('images');
    frontmatter.images.forEach((image, i) => {
      console.log(image);
      // const { childImageSharp: c, publicURL } = safe(image);
      // const { fluid: f } = safe(c);
      imgs[`Img${i + 1}`] = ({ align, width }) =>
        image.childImageSharp.fluid ? (
          <MDXSharpImg
            align={align}
            width={width}
            fluid={safeFluid(image.childImageSharp.fluid)}
          />
        ) : (
          <MDXSrcImg align={align} width={width} src={image.publicURL || ''} />
        );
    });
  }
  return (
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
      <MDXRenderer imgs={imgs}>{code.body}</MDXRenderer>
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
};

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
        images {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      code {
        body
      }
    }
  }
`;
