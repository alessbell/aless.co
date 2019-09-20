module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
    '^.+\\.tsx?$': `ts-jest`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-plugin-mdx)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testMatch: ['**/*.test.(js|tsx|ts)'],
  setupFilesAfterEnv: [
    '<rootDir>/__tests__/config/jest-setup-test-framework.ts',
  ],
  setupFiles: [`<rootDir>/loadershim.js`, `jest-canvas-mock`],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*',
    'src/pages/**/*',
    'src/templates/**/*',
  ],
};
