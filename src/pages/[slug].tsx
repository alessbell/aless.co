// import React from 'react';
// import Link from 'next/link';
// import SEO from '../components/seo';
// import { Tag } from '../components/styles';

// type FrontMatter = {
//   title: string;
//   spoiler: string;
//   date: string;
//   keywords?: string[];
// };

// type Article = {
//   fields: {
//     slug: string;
//   };
//   frontmatter: FrontMatter;
// };

// type BlogPostData = {
//   data: {
//     mdx: {
//       frontmatter: FrontMatter;
//       excerpt: string;
//       body?: string;
//     };
//     site: {
//       siteMetadata: {
//         siteUrl: string;
//       };
//     };
//   };
//   pageContext: {
//     previous: Article;
//     next: Article;
//   };
//   pathContext: {
//     slug?: string;
//   };
// };

// const BlogPostTemplate = ({
//   data: {
//     mdx: { frontmatter, excerpt, body },
//     site: {
//       siteMetadata: { siteUrl },
//     },
//   },
//   pageContext: { previous, next },
//   pathContext: { slug },
// }: BlogPostData): JSX.Element => (
//   <>
//     <SEO
//       // ogImageProp={slug ? `${siteUrl}${slug}twitter-card.jpg` : undefined}
//       // keywords={frontmatter.keywords ? frontmatter.keywords : []}
//       title={frontmatter.title}
//       description={excerpt}
//     />
//     <h2>{frontmatter.title}</h2>
//     <h3>{frontmatter.spoiler}</h3>
//     <div
//       style={{
//         display: 'inline',
//         lineHeight: 'initial',
//       }}
//     >
//       <small style={{ marginRight: '0.6rem', fontSize: '0.9rem' }}>
//         {frontmatter.date}
//       </small>
//       {frontmatter.keywords?.map((keyword, i) => (
//         <Tag key={i}>{keyword}</Tag>
//       ))}
//     </div>
//     {body && (
//       <div className="post-content" style={{ marginTop: '1.5rem' }}>
//         <MDXRenderer>{body}</MDXRenderer>
//       </div>
//     )}
//     <hr />
//     <ul
//       style={{
//         display: `flex`,
//         flexWrap: `wrap`,
//         marginLeft: `0`,
//         marginRight: `0`,
//         justifyContent: `space-between`,
//         listStyle: `none`,
//         padding: 0,
//       }}
//     >
//       <li>
//         {previous && (
//           <Link href={previous.fields.slug}>
//             ← {previous.frontmatter.title}
//           </Link>
//         )}
//       </li>
//       <li>
//         {next && (
//           <Link href={next.fields.slug}>{next.frontmatter.title} →</Link>
//         )}
//       </li>
//     </ul>
//   </>
// );

// export default BlogPostTemplate;

// Install remark and remark-html
import React from 'react';
import remark from 'remark';
import html from 'remark-html';
import Layout from '../components/layout';
import { getPostBySlug, getAllPosts } from '../lib/blog';

const BlogPost = (props) => {
  return (
    <Layout>
      <div
        // className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </Layout>
  );
};

export default BlogPost;

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const markdown = await remark()
    .use(html)
    .process(post.content || '');
  const content = markdown.toString();

  return {
    props: {
      ...post,
      content,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
