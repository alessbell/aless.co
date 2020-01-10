import * as React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import Uses from '../../src/pages/uses';
import { metadataMock } from '../../__mocks__/metadata-mock';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => metadataMock);
});

describe('Uses page', () => {
  test('renders', () => {
    const { getByText } = render(<Uses />);
    getByText('anti/pattern');
    getByText('A blog by Alessia Bellisario');
  });
});
