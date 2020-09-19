import * as React from 'react';
import { Shaders, Node, GLSL as glsl } from 'gl-react';
import useTimer from '../lib/useTimer';

const m = 0.3;
const interval = 2000;

const shaders = Shaders.create({
  blueWave: {
    frag: glsl`
    precision highp float;
    varying vec2 uv;
    uniform float blue;
    void main() {
      gl_FragColor = vec4(uv.x, uv.y, blue * ${m}, 1.0);
    }`,
  },
});

const BlueWave = () => {
  const time = useTimer();
  return (
    <Node
      shader={shaders && shaders.blueWave}
      uniforms={{ blue: 0.9 + 0.9 * Math.cos(time / interval) }}
    />
  );
};

export default {
  BlueWave: React.memo(BlueWave),
};
