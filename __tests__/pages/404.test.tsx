import * as React from 'react';
import { render } from 'react-testing-library';
import NotFound from '../../src/pages/404';

describe('404 page', () => {
  test('renders', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText('anti/pattern')).toBeInTheDocument();
    expect(getByText('a blog by alessia bellisario')).toBeInTheDocument();
    expect(
      getByText(/you just hit a route that doesn't exist... the sadness./i)
    ).toBeInTheDocument();
  });
});
