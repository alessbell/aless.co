// src/lib/blog.js// Install gray-matter and date-fns
import matter from 'gray-matter';
import { parseISO, format } from 'date-fns';
import fs from 'fs';
import { join } from 'path';

// Add markdown files in `src/content/blog`
const postsDirectory = join(process.cwd(), 'src', 'content', 'blog');

export const getPostSlugs = (): string[] => {
  return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = (slug) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const date = format(parseISO(data.date), 'MMMM dd, yyyy');

  return { slug: realSlug, frontmatter: { ...data, date }, content };
};

// export function getPostBySlug(slug, fields = []) {
//   const realSlug = slug.replace(/\.md$/, '');
//   const fullPath = join(postsDirectory, `${realSlug}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const { data, content } = matter(fileContents);

//   const items = {};

//   // Ensure only the minimal needed data is exposed
//   fields.forEach((field) => {
//     if (field === 'slug') {
//       items[field] = realSlug;
//     }
//     if (field === 'content') {
//       items[field] = content;
//     }

//     if (data[field]) {
//       items[field] = data[field];
//     }
//   });

//   return items;
// }

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
  return posts;
}
