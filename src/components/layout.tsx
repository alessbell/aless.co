import * as React from 'react';
import { Global, css } from '@emotion/react';
import { useStaticQuery, graphql } from 'gatsby';
import { H1, Link, LeftBar, RightBar, TopBar, BottomBar } from './styles';
import Header from './header';
import Toggle from './toggle';
import Footer from './footer';

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

  const data: {
    site?: {
      siteMetadata?: { title: string; commit: string; repository: string };
    };
  } = useStaticQuery(graphql`
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
          backgroundColor: 'var(--bg)',
        }}
      >
        <Global
          styles={css`
            body {
              padding: 0 1.5rem;
              margin: 0;
              background-color: var(--bg);
            }
            *:focus {
              outline: blue auto;
            }
            body.light {
              --bg: #ffffff;
              --textShadow: 5px 5px 1px rgba(0, 0, 0, 0.08);
              --hr: hsla(0, 0%, 0%, 0.2);
              --blue: blue;
              --activeTagText: blue;
              --activeTagBg: #ff69b42e;
              --inactiveTagBg: #1aabff33;
              --codeBg: rgba(255, 229, 100, 0.2);
              --hoverBg: var(--bg);
              --headerText: black;
              --mixBlendMode: lighten;
              --mixBlendMode2: multiply;
              --titleSkewColor: #ffc461;
              --textNormal: #222;
              --vsCodeBoxShadowColor1: #00189914;
              --vsCodeBoxShadowColor2: #0098dd47;
              --codeTitleBg: hsl(220, 7.5%, 15.7%);
            }

            body.dark {
              -webkit-font-smoothing: antialiased;
              --bg: #272727;
              --textShadow: 5px 5px 1px rgba(0, 0, 0, 0.15);
              --blue: #ababff;
              --activeTagText: yellow;
              --activeTagBg: #141e8475;
              --inactiveTagBg: #1aabff33;
              --hr: hsla(0, 0%, 100%, 0.2);
              --codeBg: rgba(170, 170, 170, 0.2);
              --hoverBg: var(--bg);
              --headerText: #ffffff;
              --mixBlendMode: darken;
              --mixBlendMode2: screen;
              --titleSkewColor: #f8a51a2e;
              --textNormal: rgba(255, 255, 255, 0.88);
              --vsCodeBoxShadowColor1: #ff000042;
              --vsCodeBoxShadowColor2: #004cff59;
              --codeTitleBg: black;
            }
            details,
            summary {
              display: revert;
              cursor: pointer;
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
              margin: 1.5rem 0;
              color: #525252;
              margin-left: 0;
              font-size: 1.1rem;
              padding-left: 1rem;
              border-left: 6px solid var(--blue);
              font-style: italic;
              margin-left: -1.2rem;
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
            .grvsc-container {
              margin-left: -1.3125rem;
              margin-right: -1.3125rem;
              border-radius: 0 !important;
              box-shadow: 1px 0 10px var(--vsCodeBoxShadowColor2),
                1px 0 3px var(--vsCodeBoxShadowColor1),
                -1px 0 3px var(--vsCodeBoxShadowColor1),
                1px 0 3px var(--vsCodeBoxShadowColor1),
                -1px 0 3px var(--vsCodeBoxShadowColor1), 1px 0 3px #fff,
                -1px 0 3px var(--vsCodeBoxShadowColor1),
                1px 0 3px var(--vsCodeBoxShadowColor1);

              @media (min-width: 44em) {
                border-radius: 8px !important;
              }
            }
            .gatsby-code-title + .grvsc-container {
              @media (min-width: 44em) {
                border-top-right-radius: 0 !important;
                border-top-left-radius: 0 !important;
              }
            }

            .grvsc-container > code {
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
              height: 100%;
            }

            .youtube-mdx-embed,
            .twitter-tweet-mdx-embed {
              margin-bottom: 1.5rem;
            }

            .post-content > h3 {
              color: var(--blue);
            }

            @media (hover: hover) {
              a:hover {
                color: black;
                background-color: yellow;
                border-radius: 0.3rem;
              }

              h1 {
                a {
                  &:hover {
                    background-color: var(--hoverBg);
                    color: inherit;
                  }
                }
              }
            }
            transition: 'color 1s ease-out, background 1s ease-out';
            .gatsby-code-title {
              padding-top: var(
                --grvsc-padding-top,
                var(--grvsc-padding-v, 0.75rem)
              );
              padding-bottom: var(
                --grvsc-padding-bottom,
                var(--grvsc-padding-v, 0.75rem)
              );
              padding-left: var(
                --grvsc-padding-left,
                var(--grvsc-padding-h, 1.5rem)
              );
              padding-right: var(
                --grvsc-padding-right,
                var(--grvsc-padding-h, 1.5rem)
              );
              margin-left: -1.3125rem;
              margin-right: -1.3125rem;

              background-color: var(--codeTitleBg);
              color: white;
              z-index: 0;
              box-shadow: 1px 0 10px var(--vsCodeBoxShadowColor2),
                1px 0 3px var(--vsCodeBoxShadowColor1),
                -1px 0 3px var(--vsCodeBoxShadowColor1),
                1px 0 3px var(--vsCodeBoxShadowColor1),
                -1px 0 3px var(--vsCodeBoxShadowColor1), 1px 0 3px #fff,
                -1px 0 3px var(--vsCodeBoxShadowColor1),
                1px 0 3px var(--vsCodeBoxShadowColor1);

              @media (min-width: 44em) {
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
              }
            }
          `}
        />
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
                <Link id="title" to={`/`}>
                  {data?.site?.siteMetadata?.title}
                </Link>
              </H1>
              {typeof document !== `undefined` && <Header />}
              {theme !== 'null' && <Toggle />}
            </div>
            <h3>A blog by Alessia Bellisario</h3>
          </header>
          {children}
          <Footer
            commit={data?.site?.siteMetadata?.commit}
            repository={data?.site?.siteMetadata?.repository}
          />
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
