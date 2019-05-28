import * as React from 'react';
import { render } from 'react-testing-library';
import { StaticQuery } from 'gatsby';
import SEO from '../../src/components/seo';

beforeEach(() => {
  (StaticQuery as jest.Mock).mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `anti/pattern`,
          description: `a blog by alessia bellisario`,
        },
      },
    })
  );
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
