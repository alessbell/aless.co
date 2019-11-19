import * as React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../../src/pages/404';

describe('404 page', () => {
  test('renders', () => {
    const { getByText } = render(<NotFound />);
    getByText('anti/pattern');
    getByText('a blog by alessia bellisario');
    getByText(/oops, there's nothing here.../i);
  });
});
