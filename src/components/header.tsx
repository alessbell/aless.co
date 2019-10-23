/* istanbul ignore file */
import * as React from 'react';
import { Surface } from 'gl-react-dom';
import Shaders from './shaders';

const mixBlendMode = { mixBlendMode: `var(--mixBlendMode2)` } as any;
const shaders = Object.values(Shaders).map((S, idx) => <S key={idx} />);

const Header: React.FC = () => {
  const [shader, setShader] = React.useState(0);

  if (typeof document !== `undefined`) {
    (window as any).__onShaderChange = () => {
      setShader(parseInt((window as any).__shader, 10));
    };

    React.useEffect(() => {
      setShader(parseInt((window as any).__shader, 10));
    });
  }

  // const randomize = () => Math.floor(Math.random() * shaders.length);

  // const getRadomShader = () => {
  //   const lastRandom = shader;
  //   let random = randomize();
  //   while (random === lastRandom) {
  //     random = randomize();
  //   }
  //   return random;
  // };

  return (
    <>
      <div style={{ position: 'absolute', top: '0', ...mixBlendMode }}>
        <span style={{ position: 'absolute', top: '0', ...mixBlendMode }}>
          <Surface width={253} height={47}>
            {shaders[shader]}
          </Surface>
        </span>
      </div>
      {/* <button
        style={{
          float: 'right',
        }}
        onClick={() => (window as any).__setPreferredShader(getRadomShader())}
      >
        <span>♻️</span>
      </button> */}
    </>
  );
};

export default Header;
