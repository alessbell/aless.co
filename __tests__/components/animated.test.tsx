import * as React from 'react';
import { render } from '@testing-library/react';
import Animated from '../../src/components/animated';

jest.mock('gl-react');
describe('Animated test', () => {
  test('renders', () => {
    render(<Animated />);
  });
});
