const regularMap = new Map([
  [1, "I"],
  [10, "X"],
  [100, "C"],
  [1000, "M"],
]);

const irregularMap = new Map([
  [4, "IV"],
  [5, "V"],
  [9, "IX"],
  [40, "XL"],
  [50, "L"],
  [90, "XC"],
  [400, "CD"],
  [500, "D"],
  [900, "CM"],
]);

/**
 *
 * @param {number} num
 * @param {string} str
 * @returns {string}
 * @example
 * times(3, "a"); // "aaa"
 */
function times(num, str) {
  let res = "";

  for (let i = 0; i < num; i++) {
    res += str;
  }

  return res;
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let pow = 0;
  let cur = num;
  let roman = "";

  while (cur > 0) {
    const digit = cur % 10;
    let inc = "";

    if (digit === 4 || digit === 5 || digit === 9) {
      inc = irregularMap.get(10 ** pow * digit);
    } else if (digit > 5) {
      inc =
        irregularMap.get(10 ** pow * 5) +
        times(digit - 5, regularMap.get(10 ** pow));
    } else {
      inc = times(digit, regularMap.get(10 ** pow));
    }

    roman = inc + roman;
    cur = Math.floor(cur / 10);
    pow++;
  }

  return roman;
};
