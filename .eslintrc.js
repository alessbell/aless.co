module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:testing-library/react',
    'plugin:react-hooks/recommended',
    'plugin:jest-dom/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  plugins: [
    'jest',
    '@typescript-eslint',
    'react',
    'testing-library',
    'jest-dom',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    '@typescript-eslint/no-explicit-any': 2,
    'testing-library/no-await-sync-events': 'error',
    'testing-library/no-manual-cleanup': 'error',
    'testing-library/no-node-access': 'error',
    'testing-library/no-render-in-setup': 'error',
    'testing-library/no-wait-for-multiple-assertions': 'error',
    'testing-library/no-wait-for-side-effects': 'error',
    'testing-library/no-wait-for-snapshot': 'error',
    'testing-library/prefer-wait-for': 'error',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-user-event': 'error',
    'testing-library/prefer-screen-queries': 'error',
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
