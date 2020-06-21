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
const data5 = [
  [2, 2],
  [1, 1],
  [0, 0],
  [2, 0],
];

function getAdjacentFresh(grid, i, j) {
  const adjacent = [];

  // top
  if (i - 1 >= 0 && grid[i - 1][j] == 1) {
    adjacent.push([i - 1, j]);
  }
  // bottom
  if (i + 1 < grid.length && grid[i + 1][j] == 1) {
    adjacent.push([i + 1, j]);
  }
  // left
  if (j - 1 >= 0 && grid[i][j - 1] == 1) {
    adjacent.push([i, j - 1]);
  }
  // right
  if (j + 1 < grid[i].length && grid[i][j + 1] == 1) {
    adjacent.push([i, j + 1]);
  }

  return adjacent;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  let queue1 = [];
  let queue2 = [];
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 2) {
        queue1.push([i, j]);
      }
    }
  }

  while (queue1.length > 0) {
    const [i, j] = queue1.shift();
    const adj = getAdjacentFresh(grid, i, j);

    for (const cell of adj) {
      grid[cell[0]][cell[1]] = 2;
      queue2.push(cell);
    }

    if (queue1.length === 0) {
      if (queue2.length > 0) {
        count++;
      }

      const tmp = queue1;
      queue1 = queue2;
      queue2 = tmp;
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }

  return count;
}

orangesRotting(data5); //?
