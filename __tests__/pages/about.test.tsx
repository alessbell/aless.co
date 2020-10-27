import React from 'react';
import { useStaticQuery } from 'gatsby';
import { metadataMock } from '../config/metadata-mock';
import { render, screen } from '../utils';
import About from '../../src/pages/about';

const book = {
  link: 'https://www.goodreads.com/book/show/38212137-how-do-we-look',
  title:
    'How Do We Look: The Body, the Divine, and the Question of Civilization',
};

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => ({
    ...metadataMock,
    profilePicture: {
      childImageSharp: {
        fixed: {
          src: '/static/12345/5b62b/selfie.jpg',
        },
      },
    },
    ogImage: {
      childImageSharp: {
        fixed: {
          src: '/static/12345/5b62b/selfie.jpg',
        },
      },
    },
    goodreadsShelf: {
      reviews: [{ book }],
    },
  }));
});

describe('About page', () => {
  test('renders', () => {
    render(<About />);
    expect(screen.getByText('anti/pattern')).toBeInTheDocument();
    expect(
      screen.getByText('A blog by Alessia Bellisario')
    ).toBeInTheDocument();
    expect(
      screen.getByText(/a software engineer based in nyc/i)
    ).toBeInTheDocument();
    expect(screen.getByText(book.title)).toHaveAttribute('href', book.link);
  });
});
