import * as React from 'react';
import * as raf from 'raf';

let startTime: number;
let r: number;
let lastTime: number;
let time: number = 0;
let tick: number = 0;

function useTimer() {
  const interval = 1000 / 60;
  const [unusedTime, setTime] = React.useState(0);

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
  lastTime = -interval;

  React.useEffect(() => {
    r = raf(loop);

    return function cleanup() {
      raf.cancel(r);
    };
  });

  return time;
}

export default useTimer;
