/**
 * makin mazes
 *
 *
 * @author Alessia Bellisario (https://github.com/alessbell)
 */

const canvasSketch = require('canvas-sketch');
const { Grid } = require('./grids');
const { HuntAndKill, BinaryTree } = require('./algorithms');
const { pathsToSVG } = require('canvas-sketch-util/penplot');

const settings = {
  dimensions: [5, 7],
  orientation: 'portrait',
  pixelsPerInch: 300,
  scaleToView: true,
  units: 'in',
};

const sketch = () => {
  var maze = new BinaryTree();
  let grid = new Grid(45, 32);

  maze.on(grid);

  let start = grid.get_cell(
    Math.floor(grid.rows / 2),
    Math.floor(grid.columns / 2)
  );

  grid.set_distances(start.distances());

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
