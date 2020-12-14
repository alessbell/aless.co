/**
 * makin mazes
 *
 *
 * @author Alessia Bellisario (https://github.com/alessbell)
 */

const canvasSketch = require('canvas-sketch');
const { pathsToSVG } = require('canvas-sketch-util/penplot');

const { MaskedGrid } = require('./grids');
const { Mask } = require('./masks');
const { RecursiveBacktracker } = require('./algorithms');

const settings = {
  // dimensions: "A6",
  dimensions: [6, 8],
  orientation: 'landscape',
  pixelsPerInch: 300,
  scaleToView: true,
  units: 'in',
};

const sketch = () => {
  let maze = new RecursiveBacktracker();

  let s = `XXX...XXXX....XXXXX...XXXX....XX XX.....XX......XXX.....XX......X X......XX......XX......XX......X X.......X......XX.......X......X ........X...............X....... ............X...............X... ...........XXX.............XXX.. ....X......XXX......X......XXX.. ...XX......XXX.....XX......XXX.. ...XX......XXX.....XX......XXX.. ...XX......XXX.....XX......XXX.. XXXXX......XXX..XXXXX......XXX.. XXXX.......XXX..XXXX.......XXX.. XXX........XXX..XXX........XXX.. XX.....X...XXX..XX.....X...XXX.. X.....XX....X...X.....XX....X... ......XX..............XX........ .....XXXX............XXXX....... ...............X...............X ..............XX..............XX ..............XX..............XX`;

  // XXX...XXXX....XX
  // XX.....XX......X
  // X......XX......X
  // X.......X......X
  // ........X.......
  // ............X...
  // ...........XXX..
  // ....X......XXX..
  // ...XX......XXX..
  // ...XX......XXX..
  // ...XX......XXX..
  // ...XX......XXX..
  // XXXX.......XXX..
  // XXX........XXX..
  // XX.....X...XXX..
  // X.....XX....X...
  // ......XX........
  // .....XXXX.......
  // ...............X
  // ..............XX
  // ..............XX
  // `;

  let mask = Mask.from_txt(s);
  let grid = new MaskedGrid(mask);
  maze.on(grid);

  console.log(grid.toString());

  return ({ context, width, height, units }) => {
    context.lineWidth = 0.015;
    context.lineCap = 'square';
    context.lineJoin = 'miter';

    const lines = grid.toImg(context, 0.15, 'black');

    return [
      context.canvas,
      {
        data: pathsToSVG(lines, {
          width,
          height,
          units,
        }),
        extension: '.svg',
      },
    ];
  };
};

canvasSketch(sketch, settings);
