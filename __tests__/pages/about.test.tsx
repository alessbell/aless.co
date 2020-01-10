import * as React from 'react';
import { useStaticQuery } from 'gatsby';
import { metadataMock } from '../../__mocks__/metadata-mock';
import { render } from '@testing-library/react';
import About from '../../src/pages/about';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => ({
    ...metadataMock,
    profilePicture: {
      childImageSharp: {
        fixed: {
          base64: 'data:image/jpeg;base64,/9j/2wB/2wBDA/w/8/==',
          width: 150,
          height: 150,
          src: '/static/12345/5b62b/alessiabellisario.jpg',
          srcSet: '/static/12345/5b62b/alessiabellisario.jpg',
        },
      },
    },
  }));
});

describe('About page', () => {
  test('renders', () => {
    const { getByText } = render(<About />);
    getByText('anti/pattern');
    getByText('A blog by Alessia Bellisario');
    getByText(/a software engineer based in nyc/i);
  });
});
