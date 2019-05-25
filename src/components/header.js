import React from 'react';
import AnimatedColorWave from './animated';
let Surface;

class Header extends React.Component {
  state = { initialLoad: false, boundingRect: null };
  componentDidMount() {
    const reactDOM = require('gl-react-dom');
    Surface = reactDOM.Surface;
    this.setState({ initialLoad: true });
  }
  render() {
    const { initialLoad } = this.state;
    return (
      initialLoad && (
        <div style={{ position: 'absolute', top: '0' }}>
          <Surface width={270} height={42}>
            <AnimatedColorWave />
          </Surface>
        </div>
      )
    );
  }
}

export default Header;
