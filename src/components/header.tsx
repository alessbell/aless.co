import * as React from 'react';
import { Surface } from 'gl-react-dom';
import AnimatedColorWave from './animated';
import { OtherColorWave } from './colorwave';

const mixBlendMode = { mixBlendMode: `var(--mixBlendMode2)` } as any;

const shaders = [<AnimatedColorWave key={0} />, <OtherColorWave key={1} />];

const Header: React.FunctionComponent = () => {
  const [shader, setShader] = React.useState(0);
  // to do: don't let shader repeat on random shuffle
  return (
    <>
      <div style={{ position: 'absolute', top: '0', ...mixBlendMode }}>
        <span style={{ position: 'absolute', top: '0', ...mixBlendMode }}>
          <Surface width={253} height={47}>
            {shaders[shader]}
          </Surface>
        </span>
      </div>
      <button
        style={{ float: 'right' }}
        onClick={() => setShader(Math.floor(Math.random() * shaders.length))}
      >
        <span>♻️</span>
      </button>
    </>
  );
};

export default Header;
