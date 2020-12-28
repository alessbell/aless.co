import * as React from 'react';

import { greet } from '../../crate/pkg/mazes';

import { RecursiveBacktracker } from '../lib/mazes/algorithms';
import { Mask } from '../lib/mazes/masks';
import { MaskedGrid } from '../lib/mazes/grids';

const WasmMazes = () => {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      greet();
    }
  }, []);

  const canvasRef = React.useRef(null);
  const maze = new RecursiveBacktracker();

  // 2020 masked grid
  const s = `XXX...XXXX....XXXXX...XXXX....XX XX.....XX......XXX.....XX......X X......XX......XX......XX......X X.......X......XX.......X......X ........X...............X....... ............X...............X... ...........XXX.............XXX.. ....X......XXX......X......XXX.. ...XX......XXX.....XX......XXX.. ...XX......XXX.....XX......XXX.. ...XX......XXX.....XX......XXX.. XXXXX......XXX..XXXXX......XXX.. XXXX.......XXX..XXXX.......XXX.. XXX........XXX..XXX........XXX.. XX.....X...XXX..XX.....X...XXX.. X.....XX....X...X.....XX....X... ......XX..............XX........ .....XXXX............XXXX....... ...............X...............X ..............XX..............XX ..............XX..............XX`;

  const mask = Mask.from_txt(s);
  const grid = React.useMemo(() => new MaskedGrid(mask), [mask]);

  maze.on(grid);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    //Our first draw

    context.fillStyle = '#fff555';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.lineWidth = 0.015;
    context.lineCap = 'square';
    context.lineJoin = 'miter';

    const lines = grid.toImg(context, 0.15, 'black');
    console.log(lines);
  }, [grid]);

  return <canvas ref={canvasRef} />;
};

export default WasmMazes;
