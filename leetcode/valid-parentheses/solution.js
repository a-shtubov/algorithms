/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pair = new Map([
    ["{", "}"],
    ["(", ")"],
    ["[", "]"],
  ]);
  const stack = [];
  let i = 0;

  while (i < s.length) {
    const cur = s[i];

    if (pair.has(cur)) {
      stack.push(cur);
    } else {
      const last = stack.pop();

      if (pair.get(last) !== cur) {
        return false;
      }
    }

    i++;
  }

  return stack.length === 0;
};
