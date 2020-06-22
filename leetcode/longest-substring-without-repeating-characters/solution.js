/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
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
