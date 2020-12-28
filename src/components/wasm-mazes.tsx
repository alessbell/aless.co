import React from 'react';
// import { importWasm } from '../lib/importWasm';
// import { greet } from '../../crate/pkg/mazes';

// import { RecursiveBacktracker } from '../lib/mazes/algorithms';
// import { Mask } from '../lib/mazes/masks';
// import { MaskedGrid } from '../lib/mazes/grids';

// const WasmMazes = () => {
//   React.useEffect(() => {
//     if (typeof window !== 'undefined') {
//       greet();
//     }
//   }, []);

//   return <h1>hi</h1>;

//   // const canvasRef = React.useRef(null);
//   // const maze = new RecursiveBacktracker();

//   // // 2020 masked grid
//   // const s = `XXX...XXXX....XXXXX...XXXX....XX XX.....XX......XXX.....XX......X X......XX......XX......XX......X X.......X......XX.......X......X ........X...............X....... ............X...............X... ...........XXX.............XXX.. ....X......XXX......X......XXX.. ...XX......XXX.....XX......XXX.. ...XX......XXX.....XX......XXX.. ...XX......XXX.....XX......XXX.. XXXXX......XXX..XXXXX......XXX.. XXXX.......XXX..XXXX.......XXX.. XXX........XXX..XXX........XXX.. XX.....X...XXX..XX.....X...XXX.. X.....XX....X...X.....XX....X... ......XX..............XX........ .....XXXX............XXXX....... ...............X...............X ..............XX..............XX ..............XX..............XX`;

//   // const mask = Mask.from_txt(s);
//   // const grid = React.useMemo(() => new MaskedGrid(mask), [mask]);

//   // maze.on(grid);

//   // React.useEffect(() => {
//   //   const canvas = canvasRef.current;
//   //   const context = canvas.getContext('2d');

//   //   //Our first draw

//   //   context.fillStyle = '#fff555';
//   //   context.fillRect(0, 0, context.canvas.width, context.canvas.height);
//   //   context.lineWidth = 0.015;
//   //   context.lineCap = 'square';
//   //   context.lineJoin = 'miter';

//   //   const lines = grid.toImg(context, 0.15, 'black');
//   //   console.log(lines);
//   // }, [grid]);
//   // return <canvas ref={canvasRef} />;
// };

// export default WasmMazes;

// export const OtherComponent = () => {
//   const [wasmModule, setWasmModule] = React.useState<Record<string, unknown>>({
//     wasm: undefined,
//   });

//   React.useEffect(() => {
//     if (typeof document !== 'undefined') {
//       const loadWasm = async () => {
//         try {
//           /*eslint no-useless-concat: "off"*/
//           // const wasm = await import('../components/wasm-mazes');
//           const wasm = await importWasm().catch(console.error);
//           console.log(wasm);
//           setWasmModule({ wasm });
//           console.log('wasm set');
//         } catch (err) {
//           console.error(
//             `Unexpected error in loadWasm. [Message: ${err.message}]`
//           );
//         }
//       };
//       loadWasm();
//     }
//   }, []);

//   console.log(wasmModule);
//   return <h1>hello</h1>;
// };

export const Wasm = () => {
  const [wasmModule, setWasmModule] = React.useState();

  const loadWasm = async () => {
    try {
      //   if (typeof window === "undefined") {
      //     return
      //   }
      /*eslint no-useless-concat: "off"*/
      const wasm = await import('../../crate' + '/pkg/index');
      setWasmModule({ wasm });
      console.log(wasm);
      console.log('wasm set');
    } catch (err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  };

  const callWasm = async ({ wasm }: any) => {
    console.log('calling wasm');
    const res = await wasm.greet();
    console.log(res);
  };

  // load wasm asynchronously
  wasmModule === undefined && loadWasm();

  if (wasmModule !== undefined) {
    callWasm(wasmModule);
  }

  //   wasm
  //     .then(module => {
  //       module.main_js()
  //     })
  //     .catch(console.error)
  // wasm.main_js()
  return <p>Here</p>;
};
