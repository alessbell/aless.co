import * as React from 'react';
import loadable from '@loadable/component';

const MazeComponent = loadable(() => import('../components/wasm-mazes'));

const Canvas = () => {
  return <MazeComponent />;
};

export default Canvas;
