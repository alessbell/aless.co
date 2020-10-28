import React from 'react';
import { render, screen } from '../utils';
import Uses from '../../src/pages/uses';

describe('Uses page', () => {
  test('renders', () => {
    render(<Uses />);
    expect(screen.getByText('anti/pattern')).toBeInTheDocument();
    expect(
      screen.getByText('A blog by Alessia Bellisario')
    ).toBeInTheDocument();
  });
});
