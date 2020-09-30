import * as React from 'react';
import { graphql } from 'gatsby';
import { ArrayParam, useQueryParam, withDefault } from 'use-query-params';
// import { parse } from 'query-string';
import slugify from 'slugify';
import FlipMove from 'react-flip-move';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Tag, BlogLink } from '../components/styles';

export type Edge = {
  node: {
    frontmatter: {
      title: string;
      spoiler: string;
      date: string;
      keywords: string[];
    };
    fields: {
      slug: string;
    };
    id: string;
  };
};

export type BlogIndexProps = {
  data: {
    allMdx: {
      edges: Edge[];
      group: { tag: string }[];
    };
  };
};

// persist the state of the toggle
let detailsToggleState = true;

const BlogIndex = ({
  data: {
    allMdx: { edges, group },
  },
}: BlogIndexProps): JSX.Element => {
  const keywords = group.map((item) => item.tag);
  const [tags, setTags] = useQueryParam<(string | null)[]>(
    'tags',
    withDefault(ArrayParam, [])
  );
  const [detailsToggle, setDetailsToggle] = React.useState(detailsToggleState);

  React.useEffect(() => {
    detailsToggleState = detailsToggle;
  });

  return (
    <Layout>
      <SEO
        title="A blog by Alessia Bellisario"
        keywords={[
          `blog`,
          `rust`,
          `gatsby`,
          `javascript`,
          `react`,
          ...keywords,
        ]}
      />
      <details
        open={detailsToggle}
        style={{ margin: '2rem 0', fontSize: '0.9rem' }}
      >
        <summary onClick={() => setDetailsToggle(!detailsToggle)}>
          filter by tag
        </summary>
        <div
          style={{
            margin: '0.25rem 0',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {keywords.map((t, idx) => {
            const slug = slugify(t);
            return (
              <Tag
                key={idx}
                active={tags.includes(slug)}
                onClick={() => {
                  if (!tags.includes(slug)) {
                    setTags([...tags, slug]);
                  } else {
                    setTags(tags.filter((t) => t != slug));
                  }
                }}
              >
                {t}
              </Tag>
            );
          })}
        </div>
      </details>
      <FlipMove
        maintainContainerHeight={true}
        enterAnimation="fade"
        leaveAnimation="fade"
      >
        {edges
          .filter(({ node }) => {
            if (tags.length === 0) {
              return true;
            }
            let contains = false;
            node.frontmatter.keywords.forEach((keyword) => {
              if (tags.includes(slugify(keyword))) {
                contains = true;
              }
            });
            return contains;
          })
          .map(
            ({
              node: {
                id,
                fields: { slug },
                frontmatter: { title, date, keywords, spoiler },
              },
            }) => (
              <div key={id} style={{ margin: '1.5rem 0' }}>
                <h3>
                  <BlogLink to={slug}>{title}</BlogLink>
                </h3>
                <p style={{ marginBottom: '5px' }}>{spoiler}</p>
                <div
                  style={{
                    display: 'inline',
                    lineHeight: 'initial',
                  }}
                >
                  <small style={{ marginRight: '0.6rem', fontSize: '0.9rem' }}>
                    {date}
                  </small>
                  {keywords.map((keyword, i) => (
                    <Tag key={i}>{keyword}</Tag>
                  ))}
                </div>
              </div>
            )
          )}
      </FlipMove>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
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
            keywords
          }
          id
        }
      }
      group(field: frontmatter___keywords) {
        tag: fieldValue
      }
    }
  }
`;
