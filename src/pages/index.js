import React, { Component } from 'react';
import 'react-typist/dist/Typist.css';
import Typist from 'react-typist';
import Layout from '../components/layout';
import HelloBlue from '../components/animated';
import {
  Linx,
  CenteredText,
  Container,
  Wrapper,
  BlinkyText,
} from '../components/styles';

let Surface;
const SIZES = {
  LARGE: {
    surfaceWidth: 447,
    surfaceHeight: 240,
    textMinHeight: 16,
    textMinWidth: '28rem',
    fontSize: 2.5,
    marginTop: -0.4,
  },
  SMALL: {
    surfaceWidth: 370,
    surfaceHeight: 400,
    textMinHeight: 25,
    textMinWidth: '100%',
    fontSize: 2.5,
    marginTop: 0,
  },
};

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenSize: null,
    };
    this.renderBlinkyText = this.renderBlinkyText.bind(this);
  }

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

  renderBlinkyText = () => (
    <BlinkyText
      width={SIZES[this.state.screenSize].textMinWidth}
      minHeight={SIZES[this.state.screenSize].textMinHeight}
      fontSize={SIZES[this.state.screenSize].fontSize}
      marginTop={SIZES[this.state.screenSize].marginTop}
    >
      <Typist
        avgTypingDelay={100}
        stdTypingDelay={50}
        cursor={{
          show: true,
          blink: true,
          element: '▍',
          hideWhenDone: false,
        }}
      >
        alessia bellisario is a programmer working on the web in new york city
      </Typist>
    </BlinkyText>
  );

  renderLinks = () => (
    <CenteredText>
      <Linx href="mailto:bellisario.alessia@gmail.com">email</Linx>
      <Linx href="https://twitter.com/alessbell" target="_blank" rel="noopener">
        twitter
      </Linx>
      <Linx
        href="https://instagram.com/alessbell"
        target="_blank"
        rel="noopener"
      >
        instagram
      </Linx>
      <Linx href="https://github.com/alessbell" target="_blank" rel="noopener">
        github
      </Linx>
    </CenteredText>
  );

  render() {
    if (this.state.screenSize) {
      const { screenSize } = this.state;
      return (
        <Layout>
          <Wrapper maxWidth={SIZES[screenSize].surfaceWidth}>
            <Container>
              {this.renderBlinkyText()}
              {this.renderLinks()}
              <div style={{ position: 'absolute', top: 0 }}>
                <Surface
                  width={SIZES[screenSize].surfaceWidth}
                  height={SIZES[screenSize].surfaceHeight}
                >
                  <HelloBlue />
                </Surface>
              </div>
            </Container>
          </Wrapper>
        </Layout>
      );
    } else {
      return null;
    }
  }
}

export default IndexPage;
