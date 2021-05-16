/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  let root = { val: 0, left: null, right: null };
  let stack = [[root, 0, nums.length - 1]];

  while (stack.length > 0) {
    const [node, l, r] = stack.pop();
    const m = Math.floor((l + r) / 2);
    const val = nums[m];

    node.val = val;

    if (l <= m - 1) {
      node.left = { val: 0, left: null, right: null };
      stack.push([node.left, l, m - 1]);
    }

    if (r >= m + 1) {
      node.right = { val: 0, left: null, right: null };
      stack.push([node.right, m + 1, r]);
    }
  }

  return root;
};

sortedArrayToBST([1, 2, 3, 4, 5, 6]);
