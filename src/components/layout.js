// import React, { Component } from 'react';
// import 'react-typist/dist/Typist.css';
// import Typist from 'react-typist';
// import Layout from '../components/layout';
// import HelloBlue from '../components/animated';
// import {
//   Linx,
//   CenteredText,
//   Container,
//   Wrapper,
//   BlinkyText,
// } from '../components/styles';

// let Surface;
// const SIZES = {
//   LARGE: {
//     surfaceWidth: 447,
//     surfaceHeight: 240,
//     textMinHeight: 16,
//     textMinWidth: '28rem',
//     fontSize: 2.5,
//     marginTop: -0.4,
//   },
//   SMALL: {
//     surfaceWidth: 370,
//     surfaceHeight: 400,
//     textMinHeight: 25,
//     textMinWidth: '100%',
//     fontSize: 2.5,
//     marginTop: 0,
//   },
// };

// class IndexPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       screenSize: null,
//     };
//     this.renderBlinkyText = this.renderBlinkyText.bind(this);
//   }

//   componentDidMount() {
//     const reactDOM = require('gl-react-dom');
//     Surface = reactDOM.Surface;
//     this.setWindowSize();
//     window.onresize = this.setWindowSize;
//   }

//   setWindowSize = () =>
//     this.setState({
//       screenSize: window.innerWidth > 515 ? 'LARGE' : 'SMALL',
//     });

//   renderBlinkyText = () => (
//     <BlinkyText
//       width={SIZES[this.state.screenSize].textMinWidth}
//       minHeight={SIZES[this.state.screenSize].textMinHeight}
//       fontSize={SIZES[this.state.screenSize].fontSize}
//       marginTop={SIZES[this.state.screenSize].marginTop}
//     >
//       <Typist
//         avgTypingDelay={100}
//         stdTypingDelay={50}
//         cursor={{
//           show: true,
//           blink: true,
//           element: '▍',
//           hideWhenDone: false,
//         }}
//       >
//         alessia bellisario
//       </Typist>
//     </BlinkyText>
//   );

//   renderLinks = () => (
//     <CenteredText>
//       <Linx href="mailto:web@bellisar.io">email</Linx>
//       <Linx href="https://twitter.com/alessbell" target="_blank" rel="noopener">
//         twitter
//       </Linx>
//       <Linx
//         href="https://instagram.com/alessbell"
//         target="_blank"
//         rel="noopener"
//       >
//         instagram
//       </Linx>
//       <Linx href="https://github.com/alessbell" target="_blank" rel="noopener">
//         github
//       </Linx>
//     </CenteredText>
//   );

//   render() {
//     if (this.state.screenSize) {
//       const { screenSize } = this.state;
//       return (
//         <Layout>
//           <Wrapper maxWidth={SIZES[screenSize].surfaceWidth}>
//             <Container>
//               {this.renderBlinkyText()}
//               {this.renderLinks()}
//               <div style={{ position: 'absolute', top: 0 }}>
//                 <Surface
//                   width={SIZES[screenSize].surfaceWidth}
//                   height={SIZES[screenSize].surfaceHeight}
//                 >
//                   <HelloBlue />
//                 </Surface>
//               </div>
//             </Container>
//           </Wrapper>
//         </Layout>
//       );
//     } else {
//       return null;
//     }
//   }
// }

// export default IndexPage;

import React from 'react';
import { Link } from 'gatsby';
import { Global, css } from '@emotion/core';
import HelloBlue from './animated';
let Surface;

class Layout extends React.Component {
  state = { screenSize: null };

  componentDidMount() {
    const reactDOM = require('gl-react-dom');
    Surface = reactDOM.Surface;
    this.setWindowSize();
    window.onresize = this.setWindowSize;
  }

  setWindowSize = () =>
    this.setState({
      screenSize: window.innerWidth > 515 ? 'LARGE' : 'SMALL',
    });

  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;
    let boundingRect;
    let titleEl;
    if (typeof document !== `undefined`) {
      titleEl = document.getElementById('title');
    }
    if (titleEl) {
      boundingRect = titleEl.getBoundingClientRect();
    }

    if (location.pathname === rootPath) {
      header = (
        <>
          <h1
            style={{
              marginTop: '2rem',
              position: 'relative',
              zIndex: 100,
              mixBlendMode: 'screen',
              backgroundColor: 'white',
            }}
          >
            <Link
              id="title"
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          {boundingRect && this.state.screenSize && (
            <div style={{ position: 'absolute', top: 0 }}>
              <Surface width={boundingRect.width} height={boundingRect.height}>
                <HelloBlue />
              </Surface>
            </div>
          )}
        </>
      );
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
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
              font-family: 'Helvetica', sans-serif;
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
