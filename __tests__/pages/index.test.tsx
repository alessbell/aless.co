import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useStaticQuery } from 'gatsby';
import { metadataMock } from '../config/metadata-mock';
import Homepage from '../../src/pages/index';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => metadataMock);
});

const posts = [
  {
    node: {
      frontmatter: {
        title: 'First post',
        date: 'January 1, 1980',
        spoiler: '1...',
        keywords: ['some keyword'],
      },
      fields: {
        slug: '/first-post',
      },
      id: '123',
    },
  },
  {
    node: {
      frontmatter: {
        title: 'Second post',
        date: 'January 2, 1980',
        spoiler: '2...',
        keywords: ['some other keyword'],
      },
      fields: {
        slug: '/second-post',
      },
      id: '456',
    },
  },
  {
    node: {
      frontmatter: {
        title: 'Third post',
        date: 'January 3, 1980',
        spoiler: '3...',
        keywords: ['keyword three'],
      },
      fields: {
        slug: '/third-post',
      },
      id: '789',
    },
  },
];

describe('Homepage', () => {
  test('renders post list and previews', () => {
    render(
      <Homepage
        data={{
          allMdx: {
            edges: posts,
            group: [
              { tag: 'some keyword' },
              { tag: 'some other keyword' },
              { tag: 'keyword three' },
            ],
          },
        }}
      />
    );
    expect(screen.getByText('anti/pattern')).toBeInTheDocument();
    expect(
      screen.getByText('A blog by Alessia Bellisario')
    ).toBeInTheDocument();

    // displays 3 posts
    expect(screen.getAllByText(/post/i)).toHaveLength(3);
    posts.forEach(({ node: { frontmatter, fields } }) => {
      expect(
        screen.getByText(frontmatter.title || fields.slug)
      ).toBeInTheDocument();
      expect(
        screen.getByText(frontmatter.title || fields.slug)
      ).toHaveAttribute('href', fields.slug);
      expect(screen.getByText(frontmatter.spoiler)).toBeInTheDocument();
    });

    // can open and close details
    userEvent.click(screen.getByText(/filter by tag/i));
    expect(
      (screen.getByText(/filter by tag/i) as Element).closest('details')
    ).not.toHaveAttribute('open');
    userEvent.click(screen.getByText(/filter by tag/i) as Element);
    expect(
      (screen.getByText(/filter by tag/i) as Element).closest('details')
    ).toHaveAttribute('open');

    userEvent.click(screen.getByText('some keyword'));
    // userEvent.click(screen.getAllByText('some keyword')[0]);
  });
});
