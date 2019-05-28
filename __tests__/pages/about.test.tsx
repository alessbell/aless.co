import * as React from 'react';
import { render } from 'react-testing-library';
import About from '../../src/pages/about';

describe('About page', () => {
  test('renders', () => {
    const { getByText } = render(<About />);
    expect(getByText('anti/pattern')).toBeInTheDocument();
    expect(getByText('a blog by alessia bellisario')).toBeInTheDocument();
    expect(
      getByText(/a software engineer based in new york city/i)
    ).toBeInTheDocument();
  });
});
