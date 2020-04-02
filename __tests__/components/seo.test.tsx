import * as React from 'react';
import { useStaticQuery } from 'gatsby';
import { render } from '@testing-library/react';
import SEO from '../../src/components/seo';
import { metadataMock } from '../config/metadata-mock';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => metadataMock);
});

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
