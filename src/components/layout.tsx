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

const Layout: React.FunctionComponent = ({ children }) => {
  React.useEffect(() => {
    if ((window as any).__theme === 'dark') {
      return;
    }
    const headings = document.querySelectorAll('h1');
    let styles = ``;
    headings.forEach(heading => {
      const random = `x${Math.floor(Math.random() * 16777215).toString(16)}`;
      heading.classList.add(random);
      let text = '';
      if (heading.innerText) {
        text = heading.innerText.replace(`'`, `\\'`).replace(`\n`, '\\A ');
      }
      styles += `.${random}:after { content: '${text}';}`;
    });

    const style = document.createElement('style');
    style.textContent = styles;
    document.body.appendChild(style);
  });

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
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: '640px',
      }}
    >
      <Global
        styles={css`
          body {
            padding: 0 1.5rem;
            margin: 0;
            background-color: var(--bg);
            transition: 'color 0.2s ease-out, background 0.2s ease-out';
          }
          body.light {
            --bg: #ffffff;
            --blue: blue;
            --codeBg: rgba(255, 229, 100, 0.2);
            --hoverBg: #ffffff;
            --headerText: black;
            --mixBlendMode: screen;
            --textNormal: #222;
            --textTitle: #222;
            --textLink: #d23669;
            h1,
            h2 {
              &::after {
                top: 0;
                width: 100%;
                z-index: -1;
                left: 18px;
                color: #f8a51a;
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
                }
              }
            }
          }

          body.dark {
            -webkit-font-smoothing: antialiased;

            --bg: #090a0b;
            --blue: #6f6fbd;
            --codeBg: rgba(170, 170, 170, 0.2);
            --hoverBg: inherit;
            --headerText: #ffffff;
            --mixBlendMode: darken;
            --textNormal: rgba(255, 255, 255, 0.88);
            --textTitle: #ffffff;
            --textLink: var(--pink);
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
            background: hsla(0, 0%, 0%, 0.2);
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
          .prism-code {
            overflow-x: scroll;
            line-height: unset;
            padding: 15px 20px !important;
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
        `}
      />
      <header style={{ position: 'relative' }}>
        <H1>
          <Link id="title" to={`/`}>
            {data.site.siteMetadata.title}
          </Link>
        </H1>
        {/* <H1 style={{ position: 'absolute', top: 0, margin: 0 }}>
          {data.site.siteMetadata.title}
        </H1> */}
        {typeof document !== `undefined` && <Header />}
        <Toggle />
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
  );
};

export default Layout;
