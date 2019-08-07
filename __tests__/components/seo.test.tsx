import '@testing-library/react/cleanup-after-each';
import * as React from 'react';
import { render } from '@testing-library/react';
import SEO from '../../src/components/seo';

describe('SEO', () => {
  test('renders', () => {
    const { getByText } = render(
      <>
        <SEO
          title="about"
          keywords={[`blog`, `rust`, `gatsby`, `javascript`, `react`]}
        />
        <h1>some text</h1>
      </>
    );
    getByText('some text');
  });
});
