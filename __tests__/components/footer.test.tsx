import React from 'react';
import { useStaticQuery } from 'gatsby';
import { render, screen } from '../utils';
import { metadataMock } from '../config/metadata-mock';
import Footer from '../../src/components/footer';

const REPOSITORY = `https://github.com/alessbell/aless.co`;

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => metadataMock);
});

describe('Footer', () => {
  test('renders', () => {
    render(<Footer commit="main" repository={REPOSITORY} />);
    expect(screen.getByText(/twitter/)).toHaveAttribute(
      'href',
      'https://twitter.com/alessbell'
    );
    expect(screen.getByText(/github/)).toHaveAttribute(
      'href',
      'https://github.com/alessbell'
    );
    expect(screen.getByText(/about/)).toHaveAttribute('href', '/about/');
  });
});
