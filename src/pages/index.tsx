import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { getAllPosts } from '../lib/blog';
import { Tag, BlogLink } from '../components/styles';

const BlogIndex = (props): JSX.Element => {
  return (
    <Layout>
      <SEO
        title="A blog by Alessia Bellisario"
        // keywords={[
        //   `blog`,
        //   `rust`,
        //   `gatsby`,
        //   `javascript`,
        //   `react`,
        //   ...keywords,
        // ]}
      />
      {props.allPosts
        // .filter(({ frontmatter: { keywords } }) => {
        //   if (keywords.length === 0) {
        //     return true;
        //   }
        //   let contains = false;
        //   node.frontmatter?.keywords?.forEach((keyword) => {
        //     if (tags.includes(slugify(keyword || ''))) {
        //       contains = true;
        //     }
        //   });
        //   return contains;
        // })
        .map(({ slug, frontmatter: { title, keywords, date } }) => (
          <div key={slug} style={{ margin: '1.5rem 0' }}>
            {slug && title ? (
              <>
                <h3>
                  <BlogLink href={slug}>{title}</BlogLink>
                </h3>
                {/* <p style={{ marginBottom: '5px' }}>{frontmatter.spoiler}</p> */}
                <div
                  style={{
                    display: 'inline',
                    lineHeight: 'initial',
                  }}
                >
                  <small style={{ marginRight: '0.6rem', fontSize: '0.9rem' }}>
                    {date}
                  </small>
                  {keywords?.map((keyword, i) => (
                    <Tag key={i}>{keyword}</Tag>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        ))}
    </Layout>
  );
};

export default BlogIndex;

export async function getStaticProps() {
  // const allPosts = getAllPosts([
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'coverImage',
  //   'excerpt',
  // ]);

  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
}
