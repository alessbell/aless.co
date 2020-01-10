import * as React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import { metadataMock } from '../../__mocks__/metadata-mock';
import NotFound from '../../src/pages/404';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => metadataMock);
});

describe('404 page', () => {
  test('renders', () => {
    const { getByText } = render(<NotFound />);
    getByText('anti/pattern');
    getByText('A blog by Alessia Bellisario');
    getByText(/oops, there's nothing here.../i);
  });
});
