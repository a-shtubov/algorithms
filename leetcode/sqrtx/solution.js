/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }

  let l = 1;
  let r = x;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    const res = Math.floor(x / mid);

    if (res === mid) {
      return mid;
    }
    if (res > mid) {
      l = mid + 1;
    }
    if (res < mid) {
      r = mid - 1;
    }
  }

  return r;
};
