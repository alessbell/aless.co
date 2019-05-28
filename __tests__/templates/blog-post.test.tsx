import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { StaticQuery } from 'gatsby';
import BlogPost from '../../src/templates/blog-post';

jest.mock('gl-react-dom');

const post = {
  code: {
    body: 'this is some code being pretty printed',
  },
  excerpt: 'Some excerpt',
  frontmatter: {
    title: 'Title A',
    spoiler: 'Spoiler alert',
    date: 'July 12, 1962',
  },
};

const previous = {
  fields: {
    slug: '/some-slug-1',
  },
  frontmatter: {
    title: 'Some title 1',
  },
};

const next = {
  fields: {
    slug: '/some-slug-2',
  },
  frontmatter: {
    title: 'Some title 2',
  },
};

beforeEach(() => {
  (StaticQuery as jest.Mock).mockImplementation(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `anti/pattern`,
          repository: `https://github.com/alessbell/alessbell`,
          commit: `master`,
        },
      },
    })
  );
});

describe('Blog post', () => {
  test('renders', () => {
    const { getByText } = render(
      <BlogPost
        data={{ mdx: post }}
        pageContext={{ previous: previous, next: next }}
      />
    );
    expect(getByText('anti/pattern')).toBeInTheDocument();
    expect(getByText(/a blog by alessia bellisario/i)).toBeInTheDocument();
    expect(getByText(/title a/i)).toBeInTheDocument();
    expect(getByText(/spoiler alert/i)).toBeInTheDocument();
    expect(getByText(/july 12, 1962/i)).toBeInTheDocument();
    expect(getByText(/some title 1/i)).toHaveAttribute('href', '/some-slug-1');
    expect(getByText(/some title 2/i)).toHaveAttribute('href', '/some-slug-2');
    expect(getByText(/some title 1/i)).toHaveAttribute('rel', 'prev');
    expect(getByText(/some title 2/i)).toHaveAttribute('rel', 'next');
  });
});
