import * as React from 'react';
import * as raf from 'raf';
import ColorWave from './colorwave';

let r: number;
let startTime: number;
let lastTime: number;
const interval = 1000 / 60;

const AnimatedColorWave: React.FunctionComponent = () => {
  const [time, setTime] = React.useState(0);
  const [tick, setTick] = React.useState(0);

  const loop = (t: number) => {
    r = raf(loop);
    if (!startTime) {
      startTime = t;
    }
    if (t - lastTime > interval) {
      lastTime = t;
      setTime(t - startTime);
      setTick(tick + 1);
    }
  };
  lastTime = -interval;

  React.useEffect(() => {
    r = raf(loop);

    return function cleanup() {
      raf.cancel(r);
    };
  });

  return <ColorWave blue={0.5 + 0.5 * Math.cos(time / 3000)} />;
};

export default AnimatedColorWave;
