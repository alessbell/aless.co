import * as React from 'react';
import { render } from 'react-testing-library';
import { StaticQuery } from 'gatsby';
import Layout from '../../src/components/layout';

jest.mock('gl-react-dom');

beforeAll(() => {
  (StaticQuery as jest.Mock).mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `anti/pattern`,
          repository: `https://github.com/alessbell/alessbell`,
          commit: `master`,
        },
      },
    })
  );
});

describe('Layout', () => {
  test('renders', () => {
    const { getByText } = render(
      <Layout>
        <h1>test content</h1>
      </Layout>
    );
    getByText('a blog by alessia bellisario');
  });
});
