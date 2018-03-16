import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import { Shaders, Node, GLSL } from "gl-react";
import 'react-typist/dist/Typist.css';
// import { Surface } from "gl-react-dom"; // for React DOM
import Typist from 'react-typist';
import HelloBlue from '../components/animated';
import timeloop from '../components/HOC/timeloop';
import styled from 'emotion/react';
let Surface;
const Linx = styled.a`
  margin: 1rem;
  color: blue;
  &:hover {
    color: red;
  }
`;


class IndexPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { mount: false };
  }
  componentDidMount() {
    const reactDOM = require('gl-react-dom');
    Surface = reactDOM.Surface;
    this.setState( { mount : true }); //To rerender.
  }
  render() {
    if (this.state.mount) {
      return (
        <div style={{ position: 'relative', margin: 'auto' }} id="parent">
          <p
            style={{
              position: 'relative',
              zIndex: 100,
              mixBlendMode: 'screen',
              backgroundColor: 'white',
              fontSize: '2.5rem',
              lineHeight: '4rem',
              textAlign: 'center',
              minHeight: '16rem',
              minWidth: '28rem',
            }}
          >
            <Typist
              avgTypingDelay={80}
              stdTypingDelay={50}
              cursor={{
                show: true,
                blink: true,
                // element: '▍',
                element: '_',
                hideWhenDone: false,
              }}
            >
              alessia bellisario is a programmer working on the web in new york city
            </Typist>
          </p>
          <div style={{ textAlign: 'center' }}>
            <Linx href="mailto:bellisario.alessia@gmail.com">email</Linx>
            <Linx href="https://twitter.com/alessbell" target="_blank">twitter</Linx>
            <Linx href="https://instagram.com/alessbell" target="_blank">instagram</Linx>
            <Linx href="https://github.com/alessbell" target="_blank">github</Linx>
          </div>
          <Surface width={500} height={280} style={{ position: 'absolute', top: 0 }} id="canvas">
            <HelloBlue />
          </Surface>
        </div>
      )
    } else {
      return null;
    }
  }
}



export default IndexPage
