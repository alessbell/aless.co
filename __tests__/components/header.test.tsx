import * as React from 'react';
import { render, screen } from '../utils';
import Header from '../../src/components/header';

describe('Header', () => {
  test('renders', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
