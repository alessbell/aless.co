import '@testing-library/jest-dom/extend-expect';
import { useStaticQuery } from 'gatsby';

jest.mock('gl-react-dom');

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: `anti/pattern`,
        repository: `https://github.com/alessbell/alessbell`,
        commit: `master`,
      },
    },
  }));
});
