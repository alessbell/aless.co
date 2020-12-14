const { Cell } = require('../cells');

export class Grid {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;

    this.prepare_grid();
    this.configure_cells();
  }

  // set_distances(distances) {
  //   this.distances = distances;
  //   let farthest_id;
  //   [farthest_id, this.maximum] = distances.max();
  // }

  // background_color_for(cell) {
  //   let distance = this.distances.get_cell(cell);
  //   let intensity = ((this.maximum - distance) * 1.0) / this.maximum;
  //   let dark = Math.floor(255 * intensity);
  //   let bright = Math.floor(128 + 127 * intensity);
  //   return `rgb(${dark},${bright},${dark})`;
  // }

  prepare_grid() {
    this.grid = new Array(this.rows);
    for (let i = 0; i < this.rows; i += 1) {
      this.grid[i] = new Array(this.columns);
      for (let j = 0; j < this.columns; j += 1) {
        this.grid[i][j] = new Cell(i, j);
      }
    }
  }

  configure_cells() {
    for (let i = 0; i < this.rows; i += 1) {
      for (let j = 0; j < this.columns; j += 1) {
        let cell = this.get_cell(i, j);
        if (cell == null) continue;
        let row = cell.row;
        let col = cell.column;
        if (row > 0) cell.north = this.get_cell(row - 1, col);
        if (row < this.rows - 1) cell.south = this.get_cell(row + 1, col);
        if (col > 0) cell.west = this.get_cell(row, col - 1);
        if (col < this.columns - 1) cell.east = this.get_cell(row, col + 1);
      }
    }
  }

  get_cell(row, column) {
    if (row < 0 || row > this.rows - 1) return null;
    if (column < 0 || column > this.columns - 1) return null;
    return this.grid[row][column];
  }

  get_random_cell() {
    let row = Math.floor(Math.random() * this.rows);
    let column = Math.floor(Math.random() * this.grid[row].length);

    return this.get_cell(row, column);
  }

  size() {
    return this.rows * this.columns;
  }

  *each_row() {
    for (let i = 0; i < this.rows; i += 1) {
      yield this.grid[i];
    }
  }

  *each_cell() {
    let row_gen = this.each_row();
    for (let i = 0; i < this.rows; i += 1) {
      let row = row_gen.next().value;
      for (let j = 0; j < row.length; j += 1) {
        if (row[j]) yield row[j];
      }
    }
  }

  contents_of(cell) {
    return ' ';
  }

  toString() {
    let output = '';
    output += '+' + '---+'.repeat(this.columns) + '\n';
    let row_gen = this.each_row();
    while (true) {
      let row = row_gen.next().value;
      if (!row) break;

      let top = '|';
      let bottom = '+';

      for (let j = 0; j < row.length; j += 1) {
        let cell = row[j];
        if (!cell) cell = new Cell(-1, -1);

        let body = '   ';
        let east_boundary = cell.east && cell.isLinked(cell.east) ? ' ' : '|';
        top += body + east_boundary;

        let south_boundary =
          cell.south && cell.isLinked(cell.south) ? '   ' : '---';
        let corner = '+';
        bottom += south_boundary + corner;
      }

      output += top + '\n';
      output += bottom + '\n';
    }
    return output;
  }

  toImg(ctx, cellSize, strokeStyle = 'red') {
    const lines = [];
    ctx.strokeStyle = strokeStyle;
    let cell_gen = this.each_cell();

    while (true) {
      let cell = cell_gen.next().value;
      if (!cell) break;

      let margin = 0.05;
      let x1 = cell.column * cellSize + margin;
      let y1 = cell.row * cellSize + margin;
      let x2 = (cell.column + 1) * cellSize + margin;
      let y2 = (cell.row + 1) * cellSize + margin;

      // console.log(this.background_color_for(cell));
      // ctx.beginPath();
      // ctx.rect(x1, y1, x2, y2);
      // ctx.stroke();
      // ctx.fillStyle = this.background_color_for(cell);
      // ctx.fillRect(x1, y1, x2, y2);

      if (!cell.north) {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y1);
        ctx.stroke();
        lines.push([
          [x1, y1],
          [x2, y1],
        ]);
      }
      if (!cell.west) {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1, y2);
        ctx.stroke();
        lines.push([
          [x1, y1],
          [x1, y2],
        ]);
      }
      if ((cell.east && !cell.isLinked(cell.east)) || !cell.east) {
        ctx.moveTo(x2, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        lines.push([
          [x2, y1],
          [x2, y2],
        ]);
      }
      if ((cell.south && !cell.isLinked(cell.south)) || !cell.south) {
        ctx.moveTo(x1, y2);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        lines.push([
          [x1, y2],
          [x2, y2],
        ]);
      }
    }
    return lines;
  }
  deadends() {
    let list = [];

    let cell_gen = this.each_cell();
    while (true) {
      let cell = cell_gen.next().value;
      if (!cell) break;
      if (cell.get_links().length == 1) {
        list.push(cell);
      }
    }

    return list;
  }
}

export class MaskedGrid extends Grid {
  constructor(mask) {
    super(mask.rows, mask.columns);
    this.mask = mask;

    // this.rows = rows
    // this.columns = columns

    this.prepare_grid();
    this.configure_cells();
  }

  prepare_grid() {
    if (!this.mask) return;

    this.grid = new Array(this.rows);
    for (let i = 0; i < this.rows; i += 1) {
      this.grid[i] = new Array(this.columns);
      for (let j = 0; j < this.columns; j += 1) {
        if (this.mask.get_bits(i, j)) this.grid[i][j] = new Cell(i, j);
      }
    }
  }

  configure_cells() {
    if (!this.mask) return;

    super.configure_cells();
  }

  get_random_cell() {
    let row, column;
    [row, column] = this.mask.random_location();

    return this.get_cell(row, column);
  }

  size() {
    return this.mask.count();
  }
}
