import * as React from 'react';
import { render } from 'react-testing-library';
import Layout from '../../src/components/layout';

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
