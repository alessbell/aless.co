import React from 'react';
import { useStaticQuery } from 'gatsby';
import { render, screen } from '../utils';
import SEO from '../../src/components/seo';
import { metadataMock } from '../config/metadata-mock';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => metadataMock);
});

describe('SEO', () => {
  test('renders', () => {
    render(
      <>
        <SEO
          title="about"
          keywords={[`blog`, `rust`, `gatsby`, `javascript`, `react`]}
        />
        <h1>some text</h1>
      </>
    );
    expect(screen.getByText('some text')).toBeInTheDocument();
  });
});
