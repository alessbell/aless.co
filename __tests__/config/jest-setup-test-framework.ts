import '@testing-library/jest-dom/extend-expect';

jest.mock('gl-react-dom');

// must return object with default key because of issue with how
// import/export behaves in TS compared to ES6
// see: https://github.com/kulshekhar/ts-jest/issues/120#issuecomment-283653644

jest.mock('../../src/components/header', () => ({
  default: () => 'AnimatedColorWave',
}));
