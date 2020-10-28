import React from 'react';
import { render, screen } from '../utils';
import Footer from '../../src/components/footer';

const REPOSITORY = `https://github.com/alessbell/aless.co`;

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
