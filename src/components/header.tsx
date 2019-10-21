import * as React from 'react';
import { Surface } from 'gl-react-dom';
import AnimatedColorWave from './animated';

const mixBlendMode = { mixBlendMode: `var(--mixBlendMode2)` } as any;

const Header: React.FunctionComponent = () => (
  <div style={{ position: 'absolute', top: '0', ...mixBlendMode }}>
    <span style={{ position: 'absolute', top: '0', ...mixBlendMode }}>
      <Surface width={253} height={47}>
        <AnimatedColorWave />
      </Surface>
    </span>
  </div>
);

export default Header;
