/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = Array.from({ length: numRows }, (_, idx) => new Array(idx + 1));

  for (let i = 0; i < res.length; i++) {
    const row = res[i];

    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 1; j < row.length - 1; j++) {
      row[j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }

  return res;
};
