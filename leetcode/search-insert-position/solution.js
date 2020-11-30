/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target < nums[0]) {
    return 0;
  }

  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    const mid = Math.floor((j + i) / 2);
    const el = nums[mid];

    if (el === target) {
      return mid;
    } else if (el > target) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  return i;
};
