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
      initialLoad && (
        <div style={{ position: 'absolute', top: '0' }}>
          <Surface width={boundingRect.width} height={boundingRect.height}>
            <HelloBlue />
          </Surface>
        </div>
      )
    );
  }
}

export default Header;
