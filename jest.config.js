module.exports = {
  reporters: ['default', '@jamesacarr/jest-reporter-github-actions'],
  testLocationInResults: true,
  transform: {
    '^.+\\.tsx?$': `ts-jest`,
  },
  moduleNameMapper: {
    '^@reach/router(.*)': '<rootDir>/node_modules/@gatsbyjs/reach-router$1',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.ts`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-plugin-mdx)/)`],
  globals: {
    __BASE_PATH__: ``,
    __PATH_PREFIX__: ``,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testMatch: ['**/*.test.(tsx|ts)'],
  setupFilesAfterEnv: [
    '<rootDir>/__tests__/config/jest-setup-test-framework.ts',
  ],
  setupFiles: [`<rootDir>/loadershim.ts`, `jest-canvas-mock`],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*',
    'src/pages/**/*',
    'src/templates/**/*',
  ],
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
