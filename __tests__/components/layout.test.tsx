import React from 'react';
import { render, screen } from '../utils';
import Layout from '../../src/components/layout';

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
