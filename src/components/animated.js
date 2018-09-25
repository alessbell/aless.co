import React, { Component } from 'react';
import { HelloBlue } from './helloblue';
import timeLoop from './HOC/timeloop';

export default timeLoop(
  class Example extends Component {
    render = () => (
      <HelloBlue blue={0.5 + 0.5 * Math.cos(this.props.time / 3000)} />
    );
  }
);
