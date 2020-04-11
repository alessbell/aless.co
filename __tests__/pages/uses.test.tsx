import * as React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import Uses from '../../src/pages/uses';
import { metadataMock } from '../config/metadata-mock';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => ({
    ...metadataMock,
    keyboard: {
      childImageSharp: {
        fluid: {
          base64: 'data:image/jpeg;base64,/9j/2wB/2wBDA/w/8/==',
          aspectRatio: 1.234,
          sizes: '123',
          src: '/static/12345/5b62b/keyboard.jpg',
          srcSet: '/static/12345/5b62b/keyboard.jpg',
        },
      },
    },
    desk: {
      childImageSharp: {
        fluid: {
          base64: 'data:image/jpeg;base64,/9j/2wB/2wBDA/w/8/==',
          aspectRatio: 1.234,
          sizes: '123',
          src: '/static/12345/5b62b/desk.jpg',
          srcSet: '/static/12345/5b62b/desk.jpg',
        },
      },
    },
    vscode: {
      childImageSharp: {
        fluid: {
          base64: 'data:image/jpeg;base64,/9j/2wB/2wBDA/w/8/==',
          aspectRatio: 1.234,
          sizes: '123',
          src: '/static/12345/5b62b/desk.jpg',
          srcSet: '/static/12345/5b62b/desk.jpg',
        },
      },
    },
    ogImage: {
      childImageSharp: {
        fixed: {
          base64: 'data:image/jpeg;base64,/9j/2wB/2wBDA/w/8/==',
          aspectRatio: 1.234,
          sizes: '123',
          src: '/static/12345/5b62b/desk.jpg',
          srcSet: '/static/12345/5b62b/desk.jpg',
        },
      },
    },
  }));
});

describe('Uses page', () => {
  test('renders', () => {
    const { getByText } = render(<Uses />);
    getByText('anti/pattern');
    getByText('A blog by Alessia Bellisario');
  });
});
