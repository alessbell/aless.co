import React, { Component } from "react";
import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-dom";

const shaders = Shaders.create({
  helloBlue: {
 // uniforms are variables from JS. We pipe blue uniform into blue output color
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform float blue;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
}`
  }
});

export class HelloBlue extends Component {
  render() {
    const { blue } = this.props;
    return <Node shader={shaders.helloBlue} uniforms={{ blue }} />;
  }
}
