import React from 'react';
import { render } from 'react-testing-library';
import { StaticQuery } from 'gatsby';
import About from '../../src/pages/about';

jest.mock('gl-react-dom');
beforeEach(() => {
  StaticQuery.mockImplementation(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `anti/pattern`,
          repository: `https://github.com/alessbell/alessbell`,
          commit: `master`,
        },
      },
    })
  );
});

describe('About page', () => {
  test('renders', () => {
    const { getByText } = render(<About />);
    expect(getByText('anti/pattern')).toBeInTheDocument();
    expect(getByText('a blog by alessia bellisario')).toBeInTheDocument();
    expect(
      getByText(/a programmer based in new york city/i)
    ).toBeInTheDocument();
  });
});
