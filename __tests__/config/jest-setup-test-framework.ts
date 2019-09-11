import '@testing-library/jest-dom/extend-expect';
import { useStaticQuery } from 'gatsby';

jest.mock('gl-react-dom');

// must return object with default key because of issue with how
// import/export behaves in TS compared to ES6
// see: https://github.com/kulshekhar/ts-jest/issues/120#issuecomment-283653644

jest.mock('../../src/components/header', () => ({
  default: () => 'AnimatedColorWave',
}));

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: `anti/pattern`,
        repository: `https://github.com/alessbell/alessbell`,
        commit: `master`,
        siteUrl: `https://aless.co`,
      },
    },
    ogImageDefault: {
      childImageSharp: {
        fixed: {
          src: 'https://aless.co/assets/og-image.png',
        },
      },
    },
  }));
});
