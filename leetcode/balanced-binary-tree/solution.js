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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) {
    return true;
  }

  let stack = [root];
  let cache = new Map();
  let i = 0;

  do {
    const node = stack[i];

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  } while (i++ < stack.length - 1);

  while (stack.length > 0) {
    const node = stack.pop();
    const lh = cache.get(node.left) || 0;
    const rh = cache.get(node.right) || 0;

    if (Math.abs(lh - rh) > 1) {
      return false;
    }

    const maxh = Math.max(lh, rh);
    const nodeh = maxh + 1;

    cache.set(node, nodeh);
  }

  return true;
};
