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

function getId(row, col) {
  return `${row}-${col}`;
}

function getEl(grid, row, col) {
  if (grid[row] === undefined || grid[row][col] === undefined) {
    return 0;
  }

  return grid[row][col];
}

function findAdjacent(row, col) {
  const right = [row, col + 1];
  const left = [row, col - 1];
  const top = [row - 1, col];
  const bottom = [row + 1, col];

  return [right, bottom, left, top];
}

function traverse(row, col, grid, visited) {
  const id = getId(row, col);
  const el = getEl(grid, row, col);

  if (visited.has(id) || el == 0) {
    return;
  }

  visited.add(id);

  const adj = findAdjacent(row, col);

  for (let [nr, nc] of adj) {
    traverse(nr, nc, grid, visited);
  }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  const visited = new Set();
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const id = getId(row, col);
      const el = getEl(grid, row, col);

      if (el != 0 && !visited.has(id)) {
        traverse(row, col, grid, visited);
        count++;
      }
    }
  }

  return count;
}

numIslands(data4); //?
