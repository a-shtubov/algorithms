/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let inc = 1;
  let i = digits.length - 1;

  while (i >= 0 && inc !== 0) {
    const sum = digits[i] + inc;

    inc = sum >= 10 ? 1 : 0;
    digits[i] = sum % 10;
    i--;
  }

  if (inc !== 0) {
    digits.unshift(inc);
    inc = 0;
  }

  return digits;
};
