import '@testing-library/react/cleanup-after-each';
import * as React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../src/components/footer';

const REPOSITORY = `https://github.com/alessbell/alessbell`;

describe('Footer', () => {
  test('renders', () => {
    const { getByText } = render(
      <Footer commit="master" repository={REPOSITORY} />
    );
    expect(getByText(/twitter/)).toHaveAttribute(
      'href',
      'https://twitter.com/alessbell'
    );
    expect(getByText(/github/)).toHaveAttribute(
      'href',
      'https://github.com/alessbell'
    );
    expect(getByText(/about/)).toHaveAttribute('href', '/about');
  });
});
