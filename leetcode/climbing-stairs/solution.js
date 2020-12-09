/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, cache = new Map()) {
  if (cache.has(n)) {
    return cache.get(n);
  }

  if (n < 1) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  const res = climbStairs(n - 1, cache) + climbStairs(n - 2, cache);

  cache.set(n, res);

  return res;
};
