const data1 = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
const data2 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];
const data3 = [
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];
const data4 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
const data5 = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
];
const data6 = [
  ["1", "0", "1", "1", "1"],
  ["1", "0", "1", "0", "1"],
  ["1", "1", "1", "0", "1"],
];

function getEl(grid, row, col) {
  if (grid[row] === undefined || grid[row][col] === undefined) {
    return 0;
  }

  return grid[row][col];
}

function traverse(row, col, grid) {
  const el = getEl(grid, row, col);

  if (el == 0) {
    return;
  }

  grid[row][col] = 0;

  traverse(row, col + 1, grid);
  traverse(row, col - 1, grid);
  traverse(row + 1, col, grid);
  traverse(row - 1, col, grid);
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const el = getEl(grid, row, col);

      if (el != 0) {
        traverse(row, col, grid);
        count++;
      }
    }
  }

  return count;
}

numIslands(data6); //?
