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
 * @return {number}
 */
var maxDepth = function (root, depth = 0) {
  if (!root) {
    return depth;
  }

  const dl = maxDepth(root.left, depth + 1);
  const dr = maxDepth(root.right, depth + 1);

  return Math.max(depth, dl, dr);
};
