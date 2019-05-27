import * as React from 'react';
import { Shaders, Node, GLSL } from 'gl-react';

const shaders = Shaders.create({
  colorWave: {
    frag: GLSL`
    precision highp float;
    varying vec2 uv;
    uniform float blue;
    void main() {
      gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
    }`,
  },
});

interface ColorWaveProps {
  blue: number;
}

const ColorWave: React.FunctionComponent<ColorWaveProps> = ({ blue }) => (
  <Node shader={shaders && shaders.colorWave} uniforms={{ blue }} />
);

export default ColorWave;
