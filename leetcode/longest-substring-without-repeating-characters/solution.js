/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstringNaive(s) {
  let res = 0;
  let cache = new Set();

  L1: for (let i = 0; i < s.length; i++) {
    L2: for (let j = i; j < s.length; j++) {
      if (s.length - i < res) {
        break L1;
      }

      const char = s[j];

      if (cache.has(char)) {
        cache.clear();
        break L2;
      }

      const l = j - i + 1;

      cache.add(char);

      if (l > res) {
        res = l;
      }
    }
  }

  return res;
}

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstringSlidingWindow(s) {
  let res = 0;
  let l = 0;
  let r = 0;
  let cache = new Set();

  while (s.length - l > res && l < s.length && r < s.length) {
    if (cache.has(s[r])) {
      cache.delete(s[l]);
      l++;
    } else {
      if (r - l + 1 > res) {
        res = r - l + 1;
      }

      cache.add(s[r]);
      r++;
    }
  }

  return res;
}

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let res = 0;
  let i = 0;
  let j = 0;
  let cache = new Map();

  while (j < s.length && s.length - i > res) {
    if (cache.has(s[j])) {
      i = Math.max(cache.get(s[j]), i);
    }

    res = Math.max(res, j - i + 1);
    cache.set(s[j], j + 1);
    j++;
  }

  return res;
}
