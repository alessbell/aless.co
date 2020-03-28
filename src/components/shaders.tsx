import * as React from 'react';
import { Shaders, Node, GLSL as glsl } from 'gl-react';
import useTimer from '../lib/useTimer';

const m = 0.3;
const interval = 2000;

const shaders = Shaders.create({
  redWave: {
    frag: glsl`
    precision highp float;
    varying vec2 uv;
    uniform float red;
    void main() {
      gl_FragColor = vec4(red * ${m}, uv.x, uv.y, 1.0);
    }`,
  },
  greenWave: {
    frag: glsl`
    precision highp float;
    varying vec2 uv;
    uniform float green;
    void main() {
      gl_FragColor = vec4(uv.x, green * ${m}, uv.y, 1);
    }`,
  },
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

const RedWave: React.FunctionComponent = () => {
  const time = useTimer();
  return (
    <Node
      shader={shaders && shaders.redWave}
      uniforms={{ red: 0.9 + 0.9 * Math.cos(time / interval) }}
    />
  );
};

const GreenWave: React.FunctionComponent = () => {
  const time = useTimer();
  return (
    <Node
      shader={shaders && shaders.greenWave}
      uniforms={{ green: 0.9 + 0.9 * Math.cos(time / interval) }}
    />
  );
};

const BlueWave: React.FunctionComponent = () => {
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
  RedWave: React.memo(RedWave),
  GreenWave: React.memo(GreenWave),
};
