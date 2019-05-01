import React from 'react';
import HelloBlue from './animated';
let Surface;

class Header extends React.Component {
  state = { initialLoad: false, boundingRect: null };
  componentDidMount() {
    const reactDOM = require('gl-react-dom');
    Surface = reactDOM.Surface;
    this.setState({ initialLoad: true });
    window.onresize = this.onresize;
  }
  render() {
    const { initialLoad } = this.state;
    return (
      initialLoad && (
        <div style={{ position: 'absolute', top: '0' }}>
          <Surface width={270} height={42}>
            <HelloBlue />
          </Surface>
        </div>
      )
    );
  }
}

export default Header;
