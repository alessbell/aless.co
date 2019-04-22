import React from 'react';
import { render } from 'react-testing-library';
import { StaticQuery } from 'gatsby';
import NotFound from '../../src/pages/404';

jest.mock('gl-react-dom');
beforeEach(() => {
  StaticQuery.mockImplementation(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `anti/pattern`,
        },
      },
    })
  );
});

describe('404 page', () => {
  test('renders', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText('anti/pattern')).toBeInTheDocument();
    expect(getByText('a blog by alessia bellisario')).toBeInTheDocument();
    expect(
      getByText(/you just hit a route that doesn't exist... the sadness./i)
    ).toBeInTheDocument();
  });
});
