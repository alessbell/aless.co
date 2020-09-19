import * as React from 'react';
import { useStaticQuery } from 'gatsby';
import { render, screen } from '@testing-library/react';
import Layout from '../../src/components/layout';
import { metadataMock } from '../config/metadata-mock';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => metadataMock);
});

beforeAll(() => {
  // eslint-disable-next-line no-global-assign
  document = { ...window.document };
});

afterAll(() => {
  jest.resetAllMocks();
});

describe('Layout', () => {
  test('renders', () => {
    render(
      <Layout>
        <h1>test content</h1>
      </Layout>
    );
    expect(
      screen.getByText('A blog by Alessia Bellisario')
    ).toBeInTheDocument();
  });
});
