/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let idx = 0;
  let copy = nums1.slice(0, m);

  while (idx < nums1.length) {
    const el1 = i < m ? copy[i] : Infinity;
    const el2 = j < n ? nums2[j] : Infinity;

    if (el1 > el2) {
      nums1[idx] = el2;
      j++;
    } else {
      nums1[idx] = el1;
      i++;
    }

    idx++;
  }
};
