import * as React from 'react';
import { Global, css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import { H1, Link, LeftBar, RightBar, TopBar, BottomBar } from './styles';
import Header from './header';
import Toggle from './toggle';
import Footer from './footer';

interface LayoutData {
  site: {
    siteMetadata: {
      title: string;
      commit: string;
      repository: string;
    };
  };
}

export const ThemeContext = React.createContext('light');

const Layout: React.FunctionComponent = ({ children }) => {
  const [theme, setTheme] = React.useState('null');

  if (typeof document !== `undefined`) {
    (window as any).__onThemeChange = () => {
      setTheme((window as any).__theme);
    };

    React.useEffect(() => {
      setTheme((window as any).__theme);
    });
  }

  React.useEffect(() => {
    const headings = document.querySelectorAll('h1');
    let styles = ``;
    headings.forEach(heading => {
      const random = `x${Math.floor(Math.random() * 16777215).toString(16)}`;
      heading.classList.add(random);
      let text = '';
      if (heading.innerText) {
        text = heading.innerText.replace(`'`, `\\'`).replace(`\n`, '\\A ');
      }
      styles += `.${random}:after { content: '${
        theme === 'light' ? text : ''
        // text
      }';}`;
    });

    const style = document.createElement('style');
    style.textContent = styles;
    document.body.appendChild(style);
  }, [theme]);

  const data: LayoutData = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          commit
          repository
        }
      }
    }
  `);

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: '640px',
          minHeight: '100vh',
        }}
      >
        <Global
          styles={css`
            body {
              padding: 0 1.5rem;
              margin: 0;
              background-color: var(--bg);
            }
            body.light {
              --bg: #ffffff;
              --textShadow: 5px 5px 1px rgba(0, 0, 0, 0.08);
              --hr: hsla(0, 0%, 0%, 0.2);
              --blue: blue;
              --codeBg: rgba(255, 229, 100, 0.2);
              --hoverBg: var(--bg);
              --headerText: black;
              --mixBlendMode: lighten;
              --mixBlendMode2: multiply;
              --titleSkewColor: #ffc461;
              --textNormal: #222;
            }

            body.dark {
              -webkit-font-smoothing: antialiased;

              --bg: #2d2d2d;
              --textShadow: 5px 5px 1px rgba(0, 0, 0, 0.2);
              --blue: #a3a3ff;
              --hr: hsla(0, 0%, 100%, 0.2);
              --codeBg: rgba(170, 170, 170, 0.2);
              --hoverBg: var(--bg);
              --headerText: #ffffff;
              --mixBlendMode: darken;
              --mixBlendMode2: screen;
              --titleSkewColor: #f8a51a2e;
              --textNormal: rgba(255, 255, 255, 0.88);
            }
            h1,
            h2 {
              &::after {
                top: 0;
                width: 100%;
                z-index: -1;
                left: 18px;
                color: var(--titleSkewColor);
                text-shadow: none;
                font-style: italic;
                position: absolute;
                transform: skew(-2deg) translateX(-20px);
              }
            }
            h1 {
              a {
                &:hover {
                  background-color: var(--hoverBg);
                  color: inherit;
                }
              }
            }
            hr {
              box-sizing: content-box;
              margin-left: 0;
              margin-right: 0;
              margin-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              padding-right: 0;
              padding-top: 0;
              margin-bottom: calc(1.75rem - 1px);
              background: var(--hr);
              border: none;
              height: 1px;
            }
            .autolink-header {
              margin-right: 0.5rem;
              margin-left: 0;
              @media (min-width: 52em) {
                margin-left: -1.5rem;
              }
              > svg {
                fill: var(--blue);
              }
              &:hover {
                background: var(--bg);
              }
            }
            :not(pre) > code[class*='language-'],
            pre[class*='language-'] {
              margin-bottom: 1.75rem;
            }
            blockquote {
              color: #525252;
              margin-left: 0;
              font-size: 1.1rem;
              padding-left: 1rem;
              border-left: 6px solid var(--blue);
              font-style: italic;
            }
            /* Inline code */
            code {
              line-height: 1.5;
              border-radius: 0.3rem;
              background: var(--codeBg);
              color: inherit;
              font-size: inherit;
              font-weight: inherit;
              padding: 0.15em 0.2em 0.05em;
              white-space: normal;
              text-shadow: none;
            }
            /* unset yellow code highlighting in vscode block */
            .vscode-highlight > code {
              border-radius: none;
              line-height: unset;
              background: unset;
              padding: unset;
              color: unset;
              white-space: unset;
            }
            /* Gatsby Image */
            .gatsby-resp-image-image {
              position: absolute;
              top: 0;
              width: 100%;
            }
            transition: 'color 1s ease-out, background 1s ease-out';
          `}
        />
        <header style={{ position: 'relative' }}>
          <H1>
            <Link id="title" to={`/`}>
              {data.site.siteMetadata.title}
            </Link>
          </H1>
          {typeof document !== `undefined` && <Header />}
          {theme !== 'null' && <Toggle />}
          <h3>a blog by alessia bellisario</h3>
        </header>
        {children}
        <Footer
          commit={data.site.siteMetadata.commit}
          repository={data.site.siteMetadata.repository}
        />
        <TopBar />
        <BottomBar />
        <LeftBar />
        <RightBar />
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
