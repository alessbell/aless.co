import * as React from 'react';
import { render } from '@testing-library/react';
import Uses from '../../src/pages/uses';

describe('Uses page', () => {
  test('renders', () => {
    const { getByText } = render(<Uses />);
    getByText('anti/pattern');
    getByText('A blog by Alessia Bellisario');
  });
});
