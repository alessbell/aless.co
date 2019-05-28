import * as React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { StaticQuery } from 'gatsby';
import Homepage from '../../src/pages/index';

jest.mock('gl-react-dom');
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

const posts = [
  {
    node: {
      frontmatter: {
        title: 'First post',
        date: 'January 1, 1980',
        spoiler: '1...',
      },
      fields: {
        slug: '/first-post',
      },
    },
  },
  {
    node: {
      frontmatter: {
        title: 'Second post',
        date: 'January 2, 1980',
        spoiler: '2...',
      },
      fields: {
        slug: '/second-post',
      },
    },
  },
  {
    node: {
      frontmatter: {
        title: 'Third post',
        date: 'January 3, 1980',
        spoiler: '3...',
      },
      fields: {
        slug: '/third-post',
      },
    },
  },
];

describe('Homepage', () => {
  test('renders post list and previews', () => {
    const { getAllByText, getByText } = render(
      <Homepage data={{ allMdx: { edges: posts } }} />
    );
    expect(getByText('anti/pattern')).toBeInTheDocument();
    expect(getByText('a blog by alessia bellisario')).toBeInTheDocument();
    expect(getAllByText(/post/i)).toHaveLength(3);

    posts.forEach(({ node: { frontmatter, fields } }) => {
      expect(getByText(frontmatter.title || fields.slug)).toBeInTheDocument();
      expect(getByText(frontmatter.title || fields.slug)).toHaveAttribute(
        'href',
        fields.slug
      );
      expect(getByText(frontmatter.spoiler)).toBeInTheDocument();
    });
  });
});
