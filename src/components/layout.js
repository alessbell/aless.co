import React from 'react';
import { Link as BaseLink } from 'gatsby';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { LeftBar, RightBar, TopBar, BottomBar } from './styles';
import HelloBlue from './animated';
let Surface;

const Link = styled(BaseLink)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

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

class Layout extends React.Component {
  state = { initialLoad: false };
  componentDidMount() {
    console.log('CDM');
    const reactDOM = require('gl-react-dom');
    Surface = reactDOM.Surface;
    this.setState({ initialLoad: true });
  }
  render() {
    const { title, children } = this.props;
    let header;
    let boundingRect;
    let titleEl;
    if (typeof document !== `undefined`) {
      titleEl = document.getElementById('title');
    }
    if (titleEl) {
      boundingRect = titleEl.getBoundingClientRect();
    }

    header = (
      <div style={{ position: 'relative' }}>
        <H1>
          <Link id="title" to={`/`}>
            {title}
          </Link>
        </H1>
        {this.state.initialLoad && (
          <div style={{ position: 'absolute', top: '0' }}>
            <Surface width={boundingRect.width} height={boundingRect.height}>
              <HelloBlue />
            </Surface>
          </div>
        )}
        <h3 style={{ marginTop: '0', marginBottom: '3rem' }}>
          by alessia bellisario
        </h3>
      </div>
    );

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
            footer,
            small {
              font-family: 'Roboto', 'Helvetica', sans-serif;
            }

            :not(pre) > code[class*='language-'],
            pre[class*='language-'] {
              margin-bottom: 1.75rem;
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
        {header}
        {children}
        <footer
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginBottom: '2rem',
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
            {'   '}🔹{'  '}
            <a href="mailto:website@bellisar.io">email</a>
          </div>
          <div>
            © {new Date().getFullYear()}, built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
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
