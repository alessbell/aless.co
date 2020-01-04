import * as React from 'react';
import { render } from '@testing-library/react';
import About from '../../src/pages/about';

describe('About page', () => {
  test('renders', () => {
    const { getByText } = render(<About />);
    getByText('anti/pattern');
    getByText('A blog by Alessia Bellisario');
    getByText(/a software engineer based in new york city/i);
  });
});
