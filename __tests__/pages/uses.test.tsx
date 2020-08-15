import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import Uses from '../../src/pages/uses';
import { metadataMock } from '../config/metadata-mock';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => ({
    ...metadataMock,
    keyboard: {
      childImageSharp: {
        fluid: {
          src: '/static/12345/5b62b/keyboard.jpg',
        },
      },
    },
    desk: {
      childImageSharp: {
        fluid: {
          src: '/static/12345/5b62b/desk.jpg',
        },
      },
    },
    vscode: {
      childImageSharp: {
        fluid: {
          src: '/static/12345/5b62b/vscode.jpg',
        },
      },
    },
    ogImage: {
      childImageSharp: {
        fixed: {
          src: '/static/12345/5b62b/ogimage.jpg',
        },
      },
    },
  }));
});

describe('Uses page', () => {
  test('renders', () => {
    render(<Uses />);
    expect(screen.getByText('anti/pattern')).toBeInTheDocument();
    expect(
      screen.getByText('A blog by Alessia Bellisario')
    ).toBeInTheDocument();
  });
});
