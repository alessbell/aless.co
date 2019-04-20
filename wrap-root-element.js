import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Code from './src/components/code';

const components = {
  pre: props => <div {...props} />,
  code: props => <Code {...props} />
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
