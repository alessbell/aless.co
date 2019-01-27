import React from 'react';
import styled from '@emotion/styled';
import { Link as BaseLink, StaticQuery, graphql } from 'gatsby';
import HelloBlue from './animated';
let Surface;

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

class Header extends React.Component {
  state = { initialLoad: false, boundingRect: null };
  componentDidMount() {
    const reactDOM = require('gl-react-dom');
    Surface = reactDOM.Surface;
    this.setState({ initialLoad: true });
    window.onresize = this.onresize;
  }
  onresize = () => {
    const title = document.getElementById('title');
    if (title) {
      this.setState({ boundingRect: title.getBoundingClientRect() });
    }
  };
  render() {
    const { initialLoad } = this.state;
    let titleEl;
    let boundingRect;
    if (typeof document !== `undefined`) {
      titleEl = document.getElementById('title');
    }
    if (titleEl) {
      boundingRect = this.state.boundingRect || titleEl.getBoundingClientRect();
    }
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
          <div style={{ position: 'relative' }}>
            <H1>
              <Link id="title" to={`/`}>
                {siteMetadata.title}
              </Link>
            </H1>
            {initialLoad && (
              <div style={{ position: 'absolute', top: '0' }}>
                <Surface
                  width={boundingRect.width}
                  height={boundingRect.height}
                >
                  <HelloBlue />
                </Surface>
              </div>
            )}
            <h3 style={{ marginTop: '0', marginBottom: '3rem' }}>
              by alessia bellisario
            </h3>
          </div>
        )}
      />
    );
  }
}

export default Header;
