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

var maxDepthStack = function (root) {
  if (!root) {
    return 0;
  }

  let result = 0;
  let stack = [[root, 0, 1]];

  while (stack.length > 0) {
    const [node, flag, depth] = stack.pop();

    if (!node || flag === 2) {
      continue;
    }

    result = Math.max(result, depth);

    const nextNode = flag === 0 ? node.left : node.right;
    const nextFlag = flag + 1;

    stack.push([node, nextFlag, depth]);
    stack.push([nextNode, 0, depth + 1]);
  }

  return result;
};
