import React from 'react';
import { H1, Link, LeftBar, RightBar, TopBar, BottomBar } from './styles';
import Header from './header';
import Toggle from './toggle';
import Footer from './footer';
import config from '../config';

declare global {
  interface Window {
    __onThemeChange: () => void;
    __theme: string;
  }
}

export const ThemeContext = React.createContext('light');

const Layout: React.FunctionComponent = ({ children }) => {
  const [theme, setTheme] = React.useState('null');

  if (typeof document !== `undefined`) {
    window.__onThemeChange = () => setTheme(window.__theme);
  }

  React.useEffect(() => {
    setTheme(window.__theme);
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: '640px',
          minHeight: '100vh',
          backgroundColor: 'var(--bg)',
        }}
      >
        <div style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
          <header style={{ position: 'relative' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <H1>
                <Link href={`/`}>{config.title}</Link>
              </H1>
              {typeof document !== `undefined` && <Header />}
              {theme !== 'null' && <Toggle />}
            </div>
            <h3>A blog by Alessia Bellisario</h3>
          </header>
          {children}
          <Footer commit={config.commit} repository={config.repository} />
        </div>
        <TopBar />
        <BottomBar />
        <LeftBar />
        <RightBar />
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
