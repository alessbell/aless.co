import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { decodeQueryParams } from 'serialize-query-params';
import { useStaticQuery } from 'gatsby';
import { ArrayParam } from 'use-query-params';
import { parse } from 'query-string';
import { render, screen, waitFor } from '../utils';
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
  test('renders post list and previews', async () => {
    const { history } = render(
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

    // displays 3 posts, and expects all to be there...
    // ...even the node without a spoiler
    expect(screen.getAllByText(/post/i)).toHaveLength(3);
    posts.forEach(({ node: { frontmatter, fields } }) => {
      expect(
        screen.getByText(frontmatter.title || fields.slug)
      ).toBeInTheDocument();
      expect(
        screen.getByText(frontmatter.title || fields.slug)
      ).toHaveAttribute('href', fields.slug);
    });

    // expects the spoilers that do exist (they are optional)
    // to be in the document
    expect(
      screen.getByText(posts[0].node.frontmatter.spoiler || '')
    ).toBeInTheDocument();
    expect(
      screen.getByText(posts[1].node.frontmatter.spoiler || '')
    ).toBeInTheDocument();

    // can open and close details
    userEvent.click(screen.getByText(/filter by tag/i));
    expect(screen.getByTestId(/details/i) as Element).not.toHaveAttribute(
      'open'
    );
    userEvent.click(screen.getByText(/filter by tag/i) as Element);
    expect(screen.getByTestId(/details/i) as Element).toHaveAttribute('open');

    expect(
      decodeQueryParams({ tags: ArrayParam }, parse(history.location.search))
    ).toEqual({ tags: undefined });

    userEvent.click(screen.getAllByText('some keyword')[0]);
    await waitFor(() => {
      expect(
        decodeQueryParams({ tags: ArrayParam }, parse(history.location.search))
      ).toEqual({ tags: ['some-keyword'] });
    });
  });
  test('renders filtered list using query params', async () => {
    const { history } = render(
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
      />,
      '?tags=some-keyword'
    );

    await waitFor(() => {
      expect(
        decodeQueryParams({ tags: ArrayParam }, parse(history.location.search))
      ).toEqual({ tags: ['some-keyword'] });
    });
    userEvent.click(screen.getAllByText('some keyword')[0]);
    await waitFor(() => {
      expect(
        decodeQueryParams({ tags: ArrayParam }, parse(history.location.search))
      ).toEqual({ tags: undefined });
    });
  });
});
