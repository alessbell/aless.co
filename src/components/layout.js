import React from 'react';
import { Global, css } from '@emotion/core';
import { LeftBar, RightBar, TopBar, BottomBar } from './styles';
import Header from './header';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: '40rem',
        }}
      >
        <Global
          styles={css`
            html {
              margin-left: calc(100vw - 100%);
            }
            body {
              --hr: hsla(0, 0%, 0%, 0.2);
              --inlineCode-bg: rgba(255, 229, 100, 0.2);
              --inlineCode-text: #1a1a1a;
              padding: 0 1.5rem;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              margin-top: 3rem;
            }
            h1 {
              font-family: 'GT Pressura Mono Regular', monospace;
            }
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            li,
            div,
            footer,
            small {
              font-family: 'Roboto', 'Helvetica', sans-serif;
            }

            :not(pre) > code[class*='language-'],
            pre[class*='language-'] {
              margin-bottom: 1.75rem;
            }

            ::selection {
              background: #efb617; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
              background: #efb617; /* Gecko Browsers */
            }

            hr {
              margin-bottom: 1.75rem;
            }
            p {
              line-height: 1.5rem;
              font-size: 1.1rem;
              margin-top: 0.5rem;
              margin-bottom: 1.75rem;
            }
            a {
              color: blue;
            }
            a:hover {
              color: black;
              background-color: yellow;
            }

            /* Inline code */
            code {
              border-radius: 0.3em;
              background: var(--inlineCode-bg);
              color: var(--inlineCode-text);
              padding: 0.15em 0.2em 0.05em;
              white-space: normal;
            }
          `}
        />
        <Header />
        {children}
        <footer
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginBottom: '3rem',
          }}
        >
          <div>
            <a
              href="https://twitter.com/alessbell"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
            {'   '}🔸{'  '}
            <a
              href="https://github.com/alessbell"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            {'   '}🔺{'  '}
            <a
              href="mailto:website@bellisar.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              email
            </a>
            {'   '}🔹{'  '}
            <a href="/about">about</a>
          </div>
        </footer>
        <TopBar />
        <BottomBar />
        <LeftBar />
        <RightBar />
      </div>
    );
  }
}

export default Layout;
