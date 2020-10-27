import React from 'react';
import { useStaticQuery } from 'gatsby';
import { render, screen } from '../utils';
import { metadataMock } from '../config/metadata-mock';
import NotFound from '../../src/pages/404';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => metadataMock);
});

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
