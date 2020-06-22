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
  let no = 2;
  let didChange = false;

  do {
    didChange = false;

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] == no) {
          if (col - 1 >= 0 && grid[row][col - 1] == 1) {
            grid[row][col - 1] = no + 1;
            didChange = true;
          }
          if (col + 1 < grid[row].length && grid[row][col + 1] == 1) {
            grid[row][col + 1] = no + 1;
            didChange = true;
          }
          if (row - 1 >= 0 && grid[row - 1][col] == 1) {
            grid[row - 1][col] = no + 1;
            didChange = true;
          }
          if (row + 1 < grid.length && grid[row + 1][col] == 1) {
            grid[row + 1][col] = no + 1;
            didChange = true;
          }
        }
      }
    }

    if (didChange) {
      no += 1;
    }
  } while (didChange);

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] == 1) {
        return -1;
      }
    }
  }

  return no - 2;
}

orangesRotting(data1); //?
