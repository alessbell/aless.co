export class BinaryTree {
  on(grid) {
    let cell_gen = grid.each_cell();
    while (true) {
      let cell = cell_gen.next().value;
      if (!cell) break;

      let neighbors = [];
      if (cell.north) neighbors.push(cell.north);
      if (cell.east) neighbors.push(cell.east);

      let index = Math.floor(Math.random() * neighbors.length);
      let neighbor = neighbors[index];

      if (neighbor) cell.link(neighbor);
    }
  }
}

export class HuntAndKill {
  on(grid) {
    let current = grid.get_random_cell();

    while (current) {
      let unvisited_neighbors = current
        .neighbors()
        .filter((cell) => cell.get_links().length == 0);
      let neighbor;
      let visited_neighbors;

      if (unvisited_neighbors.length > 0) {
        neighbor =
          unvisited_neighbors[
            Math.floor(Math.random() * unvisited_neighbors.length)
          ];
        current.link(neighbor);
        current = neighbor;
      } else {
        current = null;

        let cell_gen = grid.each_cell();
        while (true) {
          let cell = cell_gen.next().value;
          if (!cell) break;
          visited_neighbors = cell
            .neighbors()
            .filter((cell) => cell.get_links().length > 0);
          if (cell.get_links().length == 0 && visited_neighbors.length > 0) {
            current = cell;
            neighbor =
              visited_neighbors[
                Math.floor(Math.random() * visited_neighbors.length)
              ];
            current.link(neighbor);

            break;
          }
        }
      }
    }
  }
}

export class Kruskals {
  on(grid, state = null) {
    state = state || new State(grid);
    let neighbors = state.neighbors;
    this.shuffle(neighbors);

    while (neighbors.length > 0) {
      let left, right;
      [left, right] = neighbors.pop();
      if (state.can_merge(left, right)) state.merge(left, right);
    }
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

class State {
  constructor(grid) {
    this.grid = grid;
    this.neighbors = [];
    this.set_for_cell = {};
    this.cells_in_set = {};

    let cell_gen = grid.each_cell();

    while (true) {
      let cell = cell_gen.next().value;
      if (!cell) break;

      let set = Object.keys(this.set_for_cell).length;
      this.set_for_cell[cell.get_id()] = set;
      this.cells_in_set[set] = [cell];

      if (cell.south) this.neighbors.push([cell, cell.south]);
      if (cell.east) this.neighbors.push([cell, cell.east]);
    }
  }

  can_merge(left, right) {
    return (
      this.set_for_cell[left.get_id()] != this.set_for_cell[right.get_id()]
    );
  }

  merge(left, right) {
    left.link(right);

    let winner = this.set_for_cell[left.get_id()];
    let loser = this.set_for_cell[right.get_id()];
    let losers = this.cells_in_set[loser] || [right];
    if (winner == loser) return;

    for (let i = 0; i < losers.length; i += 1) {
      let cell = losers[i];
      this.cells_in_set[winner].push(cell);
      this.set_for_cell[cell.get_id()] = winner;
    }

    delete this.cells_in_set[loser];
  }

  add_crossing(cell) {
    if (
      cell.get_links().length > 0 ||
      !this.can_merge(cell.east, cell.west) ||
      !this.can_merge(cell.north, cell.south)
    ) {
      return false;
    }

    // this.neighbors = this.neighbors.filter(c => c[0].get_id() != cell.get_id() && c[1].get_id() != cell.get_id() )

    if (Math.random() < 0.5) {
      if (
        cell.west.get_id() == cell.get_id() ||
        cell.get_id() == cell.east.get_id() ||
        cell.north.get_id() == cell.north.south.get_id() ||
        cell.south.get_id() == cell.south.north.get_id()
      ) {
        return false;
      }

      this.neighbors = this.neighbors.filter(
        (c) => c[0].get_id() != cell.get_id() && c[1].get_id() != cell.get_id()
      );

      this.merge(cell.west, cell);
      this.merge(cell, cell.east);

      this.grid.tunnel_under(cell);
      this.merge(cell.north, cell.north.south);
      this.merge(cell.south, cell.south.north);
    } else {
      if (
        cell.north.get_id() == cell.get_id() ||
        cell.get_id() == cell.south.get_id() ||
        cell.west.get_id() == cell.west.east.get_id() ||
        cell.east.get_id() == cell.east.west.get_id()
      ) {
        return false;
      }

      this.neighbors = this.neighbors.filter(
        (c) => c[0].get_id() != cell.get_id() && c[1].get_id() != cell.get_id()
      );

      this.merge(cell.north, cell);
      this.merge(cell, cell.south);

      this.grid.tunnel_under(cell);
      this.merge(cell.west, cell.west.east);
      this.merge(cell.east, cell.east.west);
    }

    return true;
  }
}

export class RecursiveBacktracker {
  on(grid, start_at = grid.get_random_cell()) {
    let stack = [start_at];

    while (stack.length > 0) {
      let current = stack[stack.length - 1];
      let neighbors = current
        .neighbors()
        .filter((cell) => cell.get_links().length == 0);

      if (neighbors.length == 0) {
        stack.pop();
      } else {
        let neighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
        current.link(neighbor);
        stack.push(neighbor);
      }
    }
  }
}
