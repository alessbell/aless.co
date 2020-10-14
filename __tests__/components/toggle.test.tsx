import * as React from 'react';
import { render, screen } from '../utils';
import userEvent from '@testing-library/user-event';
import Toggle from '../../src/components/toggle';
import { ThemeContext } from '../../src/components/layout';

const mockedSetPreferredTheme = jest.fn();

beforeAll(() => {
  window.__setPreferredTheme = mockedSetPreferredTheme;
});

describe('Toggle test', () => {
  test('renders light to dark', () => {
    render(
      <ThemeContext.Provider value="light">
        <Toggle />
      </ThemeContext.Provider>
    );
    userEvent.click(screen.getByTestId('toggle'));
    expect(mockedSetPreferredTheme).toHaveBeenCalledWith('dark');
  });
  test('renders dark to light', () => {
    render(
      <ThemeContext.Provider value="dark">
        <Toggle />
      </ThemeContext.Provider>
    );
    userEvent.click(screen.getByTestId('toggle'));
    expect(mockedSetPreferredTheme).toHaveBeenCalledWith('light');
  });
});
