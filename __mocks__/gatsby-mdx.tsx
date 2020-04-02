import React = require('react');
const gatsbyMdx = jest.requireActual('gatsby-plugin-mdx');

module.exports = {
  ...gatsbyMdx,
  MDXRenderer: function MDXRenderer() {
    return <div />;
  },
};
