import '@testing-library/react/cleanup-after-each';
import * as React from 'react';
import { render } from '@testing-library/react';
import About from '../../src/pages/about';

describe('About page', () => {
  test('renders', () => {
    const { getByText } = render(<About />);
    getByText('anti/pattern');
    getByText('a blog by alessia bellisario');
    getByText(/a software engineer based in new york city/i);
  });
});
