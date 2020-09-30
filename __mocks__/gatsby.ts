/* eslint-disable @typescript-eslint/no-unused-vars */
import React = require('react');
const gatsby = jest.requireActual('gatsby');

// see: https://www.gatsbyjs.com/docs/unit-testing/#3-useful-mocks-to-complete-your-testing-environment

module.exports = {
  ...gatsby,
  navigate: jest.fn(),
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement('a', {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
};
