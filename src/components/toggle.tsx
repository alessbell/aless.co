import * as React from 'react';
import Toggle from 'react-toggle';
import '../css/Toggle.css';

const Header: React.FunctionComponent = () => {
  const [theme, setTheme] = React.useState(null);
  React.useEffect(() => {
    // Update the document title using the browser API
    setTheme((window as any).__theme);
  });
  (window as any).__onThemeChange = () => {
    setTheme((window as any).__theme);
  };
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
