import '@testing-library/react/cleanup-after-each';
import * as React from 'react';
import { render } from '@testing-library/react';
import Homepage from '../../src/pages/index';

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
    getByText('anti/pattern');
    getByText('a blog by alessia bellisario');
    expect(getAllByText(/post/i)).toHaveLength(3);

    posts.forEach(({ node: { frontmatter, fields } }) => {
      getByText(frontmatter.title || fields.slug);
      expect(getByText(frontmatter.title || fields.slug)).toHaveAttribute(
        'href',
        fields.slug
      );
      getByText(frontmatter.spoiler);
    });
  });
});
