import * as React from 'react';
import { useStaticQuery } from 'gatsby';
import { metadataMock } from '../config/metadata-mock';
import { render, screen } from '../utils';
import About from '../../src/pages/about';

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
  });
});
