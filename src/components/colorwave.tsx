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

const shaders2 = Shaders.create({
  gradients: {
    frag: GLSL`
    precision highp float;
    varying vec2 uv;
    uniform vec4 colors[3];
    uniform vec2 particles[3];
    void main () {
      vec4 sum = vec4(0.0);
      for (int i=0; i<3; i++) {
        vec4 c = colors[i];
        vec2 p = particles[i];
        float d = c.a * smoothstep(0.6, 0.2, distance(p, uv));
        sum += d * vec4(c.a * c.rgb, c.a);
      }
      if (sum.a > 1.0) {
        sum.rgb /= sum.a;
        sum.a = 1.0;
      }
      gl_FragColor = vec4(sum.a * sum.rgb, 1.0);
    }`,
  },
});

export interface ColorWaveProps {
  blue: number;
}

const ColorWave: React.FunctionComponent<ColorWaveProps> = ({ blue }) => (
  <Node shader={shaders && shaders.colorWave} uniforms={{ blue }} />
);

export default ColorWave;

export const OtherColorWave: React.FunctionComponent<{}> = () => (
  <Node
    shader={shaders2 && shaders2.gradients}
    uniforms={{
      colors: [
        [Math.cos(0.002), Math.sin(0.002), 0.2, 1],
        [Math.sin(0.002), -Math.cos(0.002), 0.1, 1],
        [0.3, Math.sin(3 + 0.002), Math.cos(1 + 0.003), 1],
      ],
      particles: [[0.3, 0.3], [0.7, 0.5], [0.4, 0.9]],
    }}
  />
);
