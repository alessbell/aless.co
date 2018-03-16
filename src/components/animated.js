import React, { Component } from "react";
import { Surface } from "gl-react-dom";

// Reuse that previous HelloBlue component to animate it...
import { HelloBlue } from "./helloblue";

// timeLoop is an utility that animates a component.
// in a requestAnimationFrame loop and provide a time and tick prop
import timeLoop from "./HOC/timeloop";

export default timeLoop(class Example extends Component {
  render() {
    const { time } = this.props;
    return (
      <HelloBlue blue={0.5 + 0.5 * Math.cos(time / 2000)} />
    );
  }
});
