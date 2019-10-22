import * as React from 'react';
import { Surface } from 'gl-react-dom';
import AnimatedColorWave from './animated';
import { OtherColorWave } from './colorwave';

const mixBlendMode = { mixBlendMode: `var(--mixBlendMode2)` } as any;

const shaders = [<AnimatedColorWave key={0} />, <OtherColorWave key={1} />];

const Header: React.FunctionComponent = () => {
  const [shader, setShader] = React.useState(0);

  if (typeof document !== `undefined`) {
    (window as any).__onShaderChange = () => {
      setShader(parseInt((window as any).__shader, 10));
    };

    React.useEffect(() => {
      setShader(parseInt((window as any).__shader, 10));
    });
  }

  const randomize = () => Math.floor(Math.random() * shaders.length);

  const getRadomShader = () => {
    const lastRandom = shader;
    let random = randomize();
    while (random === lastRandom) {
      random = randomize();
    }
    return random;
  };

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
        onClick={() => (window as any).__setPreferredShader(getRadomShader())}
      >
        <span>♻️</span>
      </button>
    </>
  );
};

export default Header;
