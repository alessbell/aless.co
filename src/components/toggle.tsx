import * as React from 'react';
import Toggle from 'react-toggle';
import { ThemeContext } from './layout';
import '../css/toggle.css';

const Header: React.FunctionComponent = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <div>
      <Toggle
        icons={{
          checked: <span>🌚</span>,
          unchecked: <span>💡</span>,
        }}
        checked={theme === 'dark'}
        onChange={e =>
          (window as any).__setPreferredTheme(
            e.target.checked ? 'dark' : 'light'
          )
        }
      />
    </div>
  );
};

export default Header;
