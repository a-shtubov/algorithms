const data1 = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
const data2 = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];
const data3 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
const data4 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  let count = 0;
  let didChange = false;
  let hasFresh = false;

  do {
    didChange = false;
    hasFresh = false;
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        const el = grid[row][col];

        if (el == 2) {
          if (col - 1 >= 0 && grid[row][col - 1] == 1) {
            grid[row][col - 1] = 3;
          }
          if (col + 1 < grid[row].length && grid[row][col + 1] == 1) {
            grid[row][col + 1] = 3;
          }
          if (row - 1 >= 0 && grid[row - 1][col] == 1) {
            grid[row - 1][col] = 3;
          }
          if (row + 1 < grid.length && grid[row + 1][col] == 1) {
            grid[row + 1][col] = 3;
          }
        }
      }
    }

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        const el = grid[row][col];

        if (el == 3) {
          grid[row][col] = 2;
          didChange = true;
        }
        if (el == 1) {
          hasFresh = true;
        }
      }
    }

    if (didChange) {
      count += 1;
    }
  } while (didChange);

  return hasFresh ? -1 : count;
}

orangesRotting(data4); //?
