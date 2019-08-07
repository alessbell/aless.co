import '@testing-library/react/cleanup-after-each';
import * as React from 'react';
import { render } from '@testing-library/react';
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
