/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") {
    return [];
  }

  const digitToLetters = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  const stack = [["", 0]];
  const res = [];
  let combNumber = 1;
  let count = 0;

  for (let i = 0; i < digits.length; i++) {
    const letters = digitToLetters.get(digits[i]);

    stack.push([letters, 0]);
    combNumber *= letters.length;
  }

  while (count < combNumber) {
    let comb = "";

    for (let i = 1; i < stack.length; i++) {
      const [chars, idx] = stack[i];

      comb += chars[idx];
    }

    for (let i = stack.length - 1; i > 0; i--) {
      const [chars, idx] = stack[i];
      const nextIdx = (idx + 1) % chars.length;

      stack[i][1] = nextIdx;

      if (nextIdx !== 0) {
        break;
      }
    }

    res.push(comb);
    count++;
  }

  return res;
};

letterCombinations("23"); //?
