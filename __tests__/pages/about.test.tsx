import React from 'react';
import { render, screen } from '../utils';
import About from '../../src/pages/about';

const book = {
  link: 'https://www.goodreads.com/book/show/38212137-how-do-we-look',
  title:
    'How Do We Look: The Body, the Divine, and the Question of Civilization',
};

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
