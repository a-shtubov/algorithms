/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i - 1] === " " && s[i] !== " ") {
      length = 0;
    }

    if (s[i] !== " ") {
      length++;
    }
  }

  return length;
};
