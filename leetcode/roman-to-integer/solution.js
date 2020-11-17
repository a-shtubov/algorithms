/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = map.get(s[i]);
    const next = map.get(s[i + 1]);

    res += cur;

    if (cur < next) {
      res -= cur * 2;
    }
  }

  return res;
};
