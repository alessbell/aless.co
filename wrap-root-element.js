import React from 'react';
import { MDXProvider } from '@mdx-js/react';

export const wrapRootElement = ({ element }) => (
  <MDXProvider>{element}</MDXProvider>
);
