const ranks = ["", "thousand", "million", "billion", "trillion"];
const digitsMap = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const tensMap = [
  "",
  "ten",
  "twenty",
  "thirty",
  "fourty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const irregularMap = {
  11: "eleven",
  12: "twelve",
  13: "thirdteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

function convertHundredToWords(nums) {
  const [h, t, d] = nums;

  const tens =
    irregularMap[t * 10 + d] || (tensMap[t] + " " + digitsMap[d]).trim();
  const hundreds = h !== 0 ? digitsMap[h] + " hundred" : "";
  const amp = hundreds && tens ? " and " : "";

  return hundreds + amp + tens;
}

/**
 *
 * @param {number} num
 * @returns {string}
 * @example
 * numberToWords(150); // "one hundred and fifty"
 */
function numberToWords(num) {
  const arr = [];
  let cur = num | 0;

  while (cur > 0) {
    arr.push(cur % 10);

    cur = (cur / 10) | 0;
  }

  let r = 0;
  let i = 0;
  let res = "";

  while (i < arr.length) {
    const n = [arr[i + 2] || 0, arr[i + 1] || 0, arr[i] || 0];
    const rank = ranks[r];
    const w = convertHundredToWords(n);

    res = w ? w + " " + rank + " " + res : res;
    i += 3;
    r += 1;
  }

  return res;
}
