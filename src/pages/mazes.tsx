import * as React from 'react';
import Loadable from '@loadable/component';

const MazeComponent = Loadable(() => import('../components/wasm-mazes'));

const Canvas = () => {
  return <MazeComponent />;
};

export default Canvas;
