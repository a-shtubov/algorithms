/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convertOld(s, numRows) {
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

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows < 2) {
    return s;
  }

  let res = "";
  let inc = 2 * numRows - 2;

  for (let r = 0; r < numRows; r++) {
    for (let j = r; j < s.length; j += inc) {
      res += s[j];

      if (r != 0 && r != numRows - 1) {
        res += s[j + inc - r * 2] || "";
      }
    }
  }

  return res;
}

// convertOld("PAYPALISHIRING", 4); //?
// convert("PAYPALISHIRING", 4); //?

/* 
  0     6     12
  1   5 7   11
  2 4   8 10
  3     9

  0     8        16
  1   7 9      15
  2  6  10   14
  3 5   11 13
  4     12
*/
