/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows < 2) {
    return s;
  }

  let i = 0;
  let up = true;
  let row = 0;
  let res = Array.from({ length: numRows }, () => []);

  while (i < s.length) {
    let reachedEnd = row == 0 || row == numRows - 1;

    res[row].push(s[i]);
    up = reachedEnd ? !up : up;
    row = up ? row - 1 : row + 1;

    i++;
  }

  return res.reduce((str, arr) => str + arr.join(""), "");
}

// convert("PAYPALISHIRING", 4); //?
