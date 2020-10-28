import React from 'react';
import { render, screen } from '../utils';
import NotFound from '../../src/pages/404';

describe('404 page', () => {
  test('renders', () => {
    render(<NotFound />);
    expect(screen.getByText('anti/pattern')).toBeInTheDocument();
    expect(
      screen.getByText('A blog by Alessia Bellisario')
    ).toBeInTheDocument();
    expect(
      screen.getByText(/oops, there's nothing here.../i)
    ).toBeInTheDocument();
  });
});
