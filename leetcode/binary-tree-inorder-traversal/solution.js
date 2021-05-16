/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (root === null || root === undefined) {
    return [];
  }

  let result = [];
  let stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    if (node.left !== null) {
      stack.push(node);
      stack.push(node.left);
      node.left = null;

      continue;
    }

    if (node.val !== 0) {
      result.push(node.val);
      node.val = 0;
    }

    if (node.right !== null) {
      stack.push(node);
      stack.push(node.right);
      node.right = null;

      continue;
    }
  }

  return result;
};
