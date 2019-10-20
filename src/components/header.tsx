import * as React from 'react';
import { Surface } from 'gl-react-dom';
import { Shaders, Node, GLSL } from 'gl-react';
import JSON2D from 'react-json2d';
// import AnimatedColorWave from './animated';

const shaders = Shaders.create({
  funky: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D t;
void main() {
  gl_FragColor = texture2D(t, uv) * vec4(
    0.5 + 0.5 * cos(uv.x * 30.0),
    0.5 + 0.5 * sin(uv.y * 20.0),
    0.7 + 0.3 * sin(uv.y * 8.0),
    1.0);
}`,
  },
});

const Funky: React.FunctionComponent = ({ children: t }) => (
  <Node shader={shaders.funky} uniforms={{ t }} />
);

const Header: React.FunctionComponent = () => (
  <div style={{ position: 'absolute', top: '0' }}>
    <Surface width={200} height={100}>
      {/* <AnimatedColorWave /> */}
      <Funky>
        <JSON2D width={200} height={100}>
          {{
            background: `#282c35`,
            size: [459, 100],
            draws: [
              {
                textAlign: 'center',
                fillStyle: '#fff',
                font: '48px bold Untitled Sans',
              },
              ['fillText', 'anti/pattern', 200, 50, 50],
            ],
          }}
        </JSON2D>
      </Funky>
    </Surface>
  </div>
);

export default Header;
