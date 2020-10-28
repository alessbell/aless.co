import React from 'react';
import raf from 'raf';

let startTime: number;
let r: number;
let lastTime: number;
let time = 0;
let tick = 0;

function useTimer(): number {
  const interval = 1000 / 60;
  const [, setTime] = React.useState(0);

  const loop = (t: number) => {
    r = raf(loop);
    if (!startTime) {
      startTime = t;
    }
    if (t - lastTime > interval) {
      lastTime = t;
      setTime(t - startTime);
      time = t - startTime;
      tick = tick + 1;
    }
  };

  React.useEffect(() => {
    lastTime = -interval;
    r = raf(loop);

    return function cleanup() {
      raf.cancel(r);
    };
  });

  return time;
}

export default useTimer;
