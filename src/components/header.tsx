import * as React from 'react';
import { Surface } from 'gl-react-dom';
import AnimatedColorWave from './animated';
import { OtherColorWave } from './colorwave';

const mixBlendMode = { mixBlendMode: `var(--mixBlendMode2)` } as any;

const Header: React.FunctionComponent = () => {
  const [shader, setShader] = React.useState(true);
  return (
    <div style={{ position: 'absolute', top: '0', ...mixBlendMode }}>
      <span style={{ position: 'absolute', top: '0', ...mixBlendMode }}>
        <Surface width={253} height={47}>
          {shader ? <AnimatedColorWave /> : <OtherColorWave />}
        </Surface>
      </span>
      <button onClick={() => setShader(!shader)}>other shader</button>
    </div>
  );
};

export default Header;
