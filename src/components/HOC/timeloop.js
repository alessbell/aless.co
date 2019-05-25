import React, { PureComponent } from 'react';
import raf from 'raf';

export default C => {
  class TL extends PureComponent {
    state = { time: 0, tick: 0 };
    componentDidMount() {
      let startTime;
      let lastTime;
      let refreshRate = 60;
      let interval = 1000 / refreshRate;
      lastTime = -interval;
      const loop = t => {
        this._r = raf(loop);
        if (!startTime) startTime = t;
        if (t - lastTime > interval) {
          lastTime = t;
          this.setState({
            time: t - startTime,
            tick: this.state.tick + 1,
          });
        }
      };
      this._r = raf(loop);
    }
    componentWillUnmount() {
      raf.cancel(this._r);
    }
    render() {
      return <C {...this.props} {...this.state} />;
    }
  }
  return TL;
};
