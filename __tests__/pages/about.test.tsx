import * as React from 'react';
import * as Gatsby from 'gatsby';
import { metadataMock } from '../../__mocks__/metadata-mock';
import { render } from '@testing-library/react';
import About from '../../src/pages/about';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  ...metadataMock,
  profilePicture: {
    childImageSharp: {
      fixed: {
        base64:
          'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAwQG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAbXJslF9gnlOYtpCP//EABwQAAICAgMAAAAAAAAAAAAAAAIDAQQAERIkMf/aAAgBAQABBQIzgBVZFpYY811R7HuPewmQw4kLrdf/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAgEAABAwIHAAAAAAAAAAAAAAABAAIREBIhIjFBcXKB/9oACAEBAAY/Ai46K2COaFq60OYwCpDsVsfF/8QAHBABAAICAwEAAAAAAAAAAAAAAQARECFBUWGh/9oACAEBAAE/IVJoRwE8dsXzzPuYFaWgDVS547EDu+zH/9oADAMBAAIAAwAAABBwLz7/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPxABGP/EABYRAQEBAAAAAAAAAAAAAAAAAAEQIf/aAAgBAgEBPxBxjP/EAB4QAAICAwADAQAAAAAAAAAAAAERADEhQVFhccHR/9oACAEBAAE/EF9iziE4nI6f2LsXzIhE0wWIB2QSJW3r7FZNYqGXjB4EOKg0BtiJ99hsDL6q8Kf/2Q==',
        width: 150,
        height: 150,
        src:
          '/static/6d5d3c200d11847c16c1e54763a53607/5b62b/alessiabellisario.jpg',
        srcSet:
          '/static/6d5d3c200d11847c16c1e54763a53607/5b62b/alessiabellisario.jpg 1x,\n/static/6d5d3c200d11847c16c1e54763a53607/86db7/alessiabellisario.jpg 1.5x,\n/static/6d5d3c200d11847c16c1e54763a53607/ae0bd/alessiabellisario.jpg 2x',
      },
    },
  },
}));

describe('About page', () => {
  test('renders', () => {
    const { getByText } = render(<About />);
    getByText('anti/pattern');
    getByText('A blog by Alessia Bellisario');
    getByText(/a software engineer based in nyc/i);
  });
});
