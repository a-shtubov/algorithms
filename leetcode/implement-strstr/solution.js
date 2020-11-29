/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }

  L1: for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      L2: for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          continue L1;
        }
      }

      return i;
    }
  }

  return -1;
};
