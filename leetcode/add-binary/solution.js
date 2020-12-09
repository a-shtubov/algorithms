/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let inc = 0;
  let res = "";

  while (i >= 0 || j >= 0) {
    const sum = Number(a[i] || 0) + Number(b[j] || 0) + inc;

    res = (sum % 2) + res;
    inc = sum >= 2 ? 1 : 0;

    i--;
    j--;
  }

  if (inc !== 0) {
    res = inc + res;
  }

  return res;
};
