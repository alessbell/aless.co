module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testMatch: ['**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/config/jest-setup-test-framework'],
  setupFiles: [`<rootDir>/loadershim.js`, `jest-canvas-mock`],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.js',
    'src/pages/**/*.js',
    'src/templates/**/*.js',
    '!src/components/HOC/*.js',
  ],
};
