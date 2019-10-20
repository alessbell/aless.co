import * as React from 'react';
import { Surface } from 'gl-react-dom';
import AnimatedColorWave from './animated';

const Header: React.FunctionComponent = () => {
  const mixBlendMode = { mixBlendMode: `var(--mixBlendMode2)` } as any;
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        ...mixBlendMode,
      }}
    >
      <Surface width={253} height={47}>
        <AnimatedColorWave />
      </Surface>
    </div>
  );
};

export default Header;
