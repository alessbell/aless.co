import * as React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../../src/pages/404';

describe('404 page', () => {
  test('renders', () => {
    const { getByText } = render(<NotFound />);
    getByText('anti/pattern');
    getByText('a blog by alessia bellisario');
    getByText(/you just hit a route that doesn't exist... the sadness./i);
  });
});
