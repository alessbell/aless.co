/* eslint-disable react/display-name */
import '@testing-library/jest-dom/extend-expect';

jest.mock('gl-react-dom');

jest.mock('gatsby-plugin-mdx', () => ({
  MDXRenderer: ({ children }: { children: JSX.Element }) => children,
}));
