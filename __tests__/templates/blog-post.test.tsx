import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import { metadataMock } from '../config/metadata-mock';
import BlogPost from '../../src/templates/blog-post';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => metadataMock);
});

const post = {
  excerpt: 'Some excerpt',
  body: 'Some body',
  frontmatter: {
    title: 'Title A',
    spoiler: 'Spoiler alert',
    date: 'July 12, 1962',
    keywords: ['rust', 'javascript'],
  },
};

const previous = {
  fields: {
    slug: '/some-slug-1',
  },
  frontmatter: {
    title: 'Some title 1',
    spoiler: 'This is a spoiler',
    date: 'Jan 5, 2020',
    keywords: ['keyboards', 'cats'],
  },
};

const next = {
  fields: {
    slug: '/some-slug-3',
  },
  frontmatter: {
    title: 'Some title 3',
    spoiler: 'This is another spoiler',
    date: 'Jan 6, 2020',
    keywords: ['roller blades', 'ABBA'],
  },
};

describe('Blog post', () => {
  test('renders', () => {
    render(
      <BlogPost
        data={{
          mdx: post,
          site: { siteMetadata: { siteUrl: 'https://aless.co' } },
        }}
        pathContext={{ slug: '/some-slug-2/' }}
        pageContext={{ previous, next }}
      />
    );
    expect(screen.getByText('anti/pattern')).toBeInTheDocument();
    expect(
      screen.getByText(/A blog by Alessia Bellisario/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/title a/i)).toBeInTheDocument();
    expect(screen.getByText(/spoiler alert/i)).toBeInTheDocument();
    expect(screen.getByText(/july 12, 1962/i)).toBeInTheDocument();
    expect(screen.getByText(/some body/i)).toBeInTheDocument();
    expect(screen.getByText(/some title 1/i)).toHaveAttribute(
      'href',
      '/some-slug-1'
    );
    expect(screen.getByText(/some title 3/i)).toHaveAttribute(
      'href',
      '/some-slug-3'
    );
    expect(screen.getByText(/some title 1/i)).toHaveAttribute('rel', 'prev');
    expect(screen.getByText(/some title 3/i)).toHaveAttribute('rel', 'next');
  });
  test('renders without slug in pathcontext', () => {
    render(
      <BlogPost
        data={{
          mdx: {
            excerpt: post.excerpt,
            body: post.body,
            frontmatter: {
              title: post.frontmatter.title,
              spoiler: post.frontmatter.spoiler,
              date: post.frontmatter.date,
            },
          },
          site: { siteMetadata: { siteUrl: 'https://aless.co' } },
        }}
        pathContext={{ slug: undefined }}
        pageContext={{ previous, next }}
      />
    );
    expect(screen.getByText('anti/pattern')).toBeInTheDocument();
  });
});
