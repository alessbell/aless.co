import * as React from 'react';
import { render } from '@testing-library/react';
import Code from '../../src/components/code';

describe('Code', () => {
  test('renders', () => {
    const { getByText } = render(
      <Code className="language-javascript">const x = 1;</Code>
    );
    expect(getByText(/const/)).toBeInTheDocument();
    expect(getByText(/x/)).toBeInTheDocument();
    expect(getByText(/=/)).toBeInTheDocument();
    expect(getByText(/1/)).toBeInTheDocument();
  });
});
