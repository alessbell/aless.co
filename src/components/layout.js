import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link as BaseLink, StaticQuery, graphql } from 'gatsby';
import { LeftBar, RightBar, TopBar, BottomBar } from './styles';
import Header from './header';
import Footer from './footer';

const H1 = styled.h1`
  font-size: 38px;
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 100;
  mix-blend-mode: screen;
  background-color: white;
  color: black;

  a {
    &:hover {
      background-color: white;
    }
  }
`;

const Link = styled(BaseLink)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

class Layout extends React.Component {
  componentDidMount() {
    setTimeout(function() {
      const headings = document.querySelectorAll('h1');
      let styles = ``;
      headings.forEach(heading => {
        const rando = `x${Math.floor(Math.random() * 16777215).toString(16)}`;
        heading.classList.add(rando);
        const text = heading.innerText
          .replace(`'`, `\\'`)
          .replace(`\n`, '\\A ');
        styles += `.${rando}:after { content: '${text}';}`;
      });

      const style = document.createElement('style');
      style.textContent = styles;
      document.body.appendChild(style);
    }, 100); // wait for css to load
  }
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={({ site: { siteMetadata } }) => (
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: '40rem',
            }}
          >
            <Global
              styles={css`
                @font-face {
                  font-family: 'GT Pressura Mono Regular';
                  src: url('../fonts/GT-Pressura-Mono-Regular.woff2')
                      format('woff2'),
                    url('../fonts/GT-Pressura-Mono-Regular.woff') format('woff');
                  font-weight: normal;
                  font-style: normal;
                }
                @font-face {
                  font-family: 'GT Pressura Mono Bold';
                  src: url('../fonts/GT-Pressura-Mono-Bold.woff2')
                      format('woff2'),
                    url('../fonts/GT-Pressura-Mono-Bold.woff') format('woff');
                  font-weight: bold;
                  font-style: normal;
                }

                html {
                  margin-left: calc(100vw - 100%);
                }
                body {
                  --hr: hsla(0, 0%, 0%, 0.2);
                  --inlineCode-bg: rgba(255, 229, 100, 0.2);
                  --inlineCode-text: #1a1a1a;
                  padding: 0 1.5rem;
                  margin: 0;
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
                  position: relative;
                  color: rgba(234, 26, 65, 0.75);
                  font-family: 'GT Pressura Mono Regular', monospace;
                  text-shadow: 6px 6px 1px rgba(0, 0, 0, 0.05);
                  &::after {
                    color: #f8a51a;
                    z-index: -1;
                    font-style: italic;
                    text-shadow: none;
                    position: absolute;
                    left: 1.1rem;
                    top: 0;
                    transform: skew(-2deg) translateX(-20px);
                  }
                }
                h3 {
                  margin-bottom: 0.5rem;
                }
                h2,
                h3,
                h4,
                h5,
                h6,
                p,
                li,
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

                p {
                  line-height: 1.5;
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

                blockquote {
                  color: #525252;
                  margin-left: 0;
                  font-size: 1.2rem;
                  padding-left: 1rem;
                  border-left: 6px solid blue;
                  font-style: italic;
                }

                /* Inline code */
                code {
                  line-height: 1.5;
                  border-radius: 0.3em;
                  background: var(--inlineCode-bg);
                  color: var(--inlineCode-text);
                  padding: 0.15em 0.2em 0.05em;
                  white-space: normal;
                }
              `}
            />
            <div style={{ position: 'relative' }}>
              <H1>
                <Link id="title" to={`/`}>
                  {siteMetadata.title}
                </Link>
              </H1>
              {typeof document !== `undefined` && <Header />}
              <h3 style={{ marginTop: '0', marginBottom: '3rem' }}>
                a blog by alessia bellisario
              </h3>
            </div>
            {children}
            <Footer />
            <TopBar />
            <BottomBar />
            <LeftBar />
            <RightBar />
          </div>
        )}
      />
    );
  }
}

export default Layout;
