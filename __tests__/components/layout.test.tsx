import * as React from 'react';
import { useStaticQuery } from 'gatsby';
import { render } from '@testing-library/react';
import Layout from '../../src/components/layout';
import { metadataMock } from '../../__mocks__/metadata-mock';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => metadataMock);
});

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
