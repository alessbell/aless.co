import React from 'react';
import { HelloBlue } from './helloblue';
import timeLoop from './HOC/timeloop';

const AnimatedColorLoop = ({ time }) => (
  <HelloBlue blue={0.5 + 0.5 * Math.cos(time / 3000)} />
);

export default timeLoop(AnimatedColorLoop);
