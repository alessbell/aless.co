import React from 'react';
import { Link as BaseLink } from 'gatsby';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
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
        {boundingRect && (
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
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-family: 'GT Pressura Mono Regular', monospace;
            }
            p,
            li,
            footer,
            small {
              font-family: 'Roboto', 'Helvetica', sans-serif;
            }
            a:hover {
              background-color: yellow;
            }
            h1 {
              color: navy;
            }
          `}
        />
        {header}
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    );
  }
}

export default Layout;
