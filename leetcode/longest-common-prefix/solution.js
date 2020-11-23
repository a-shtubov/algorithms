/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let resIdx = Infinity;

  for (i = 0; i < strs.length - 1; i++) {
    const s1 = strs[i];
    const s2 = strs[i + 1];

    let j = 0;

    while (s1[j] === s2[j] && j < s1.length && j < s2.length) {
      j++;
    }

    if (j === 0) {
      return "";
    }

    resIdx = Math.min(resIdx, j);
  }

  return strs[0].slice(0, resIdx);
};
