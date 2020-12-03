/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return "1";
  }

  const val = countAndSay(n - 1);
  let res = "";
  let i = 0;
  let j = 0;
  let char = val[0];

  while (i < val.length) {
    if (val[i] === char) {
      j++;
    } else {
      res += j + char;
      char = val[i];
      j = 1;
    }

    i++;
  }

  res += j + char;
  char = val[i];
  j = 1;

  return res;
};
