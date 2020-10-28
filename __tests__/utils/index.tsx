/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';

function renderWithRouter(ui: React.ReactElement) {
  const Component: React.FC<Record<string, unknown>> = () => ui;
  return { ...render(<Component default />) };
}

export { renderWithRouter as render, screen, cleanup, waitFor };
