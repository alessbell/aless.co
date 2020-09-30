import * as React from 'react';
import { Location, globalHistory } from '@reach/router';
import { QueryParamProvider } from 'use-query-params';
import { MDXProvider } from '@mdx-js/react';

export const wrapRootElement = ({
  element,
}: {
  element: JSX.Element;
}): JSX.Element => (
  <Location>
    {({ location }) => (
      <QueryParamProvider location={location} reachHistory={globalHistory}>
        <MDXProvider>{element}</MDXProvider>
      </QueryParamProvider>
    )}
  </Location>
);
