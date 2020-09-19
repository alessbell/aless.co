const gatsby = jest.requireActual('gatsby');

// see: https://www.gatsbyjs.com/docs/unit-testing/#3-useful-mocks-to-complete-your-testing-environment

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
};
