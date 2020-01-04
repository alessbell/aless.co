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
    getByText('A blog by Alessia Bellisario');
  });
});
