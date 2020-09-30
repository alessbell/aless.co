/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import {
  Router,
  LocationProvider,
  createHistory,
  createMemorySource,
} from '@reach/router';
import { QueryParamProvider } from 'use-query-params';

function renderWithRouter(ui: React.ReactElement, initialRoute = '/') {
  const history = createHistory(createMemorySource(initialRoute));
  const Component: React.FC<Record<string, unknown>> = () => ui;
  return {
    ...render(
      <LocationProvider history={history}>
        <Router>
          <QueryParamProvider {...{ default: true }} reachHistory={history}>
            <Component default />
          </QueryParamProvider>
        </Router>
      </LocationProvider>
    ),
    history,
  };
}

export { renderWithRouter as render, screen, cleanup, waitFor };
