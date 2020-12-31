/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSymmetric = function (tree) {
  if (!tree) {
    return true;
  }

  if (tree.left === null && tree.right === null) {
    return true;
  }

  let stack = [tree.left, tree.right];

  while (stack.length > 0) {
    let i = 0;
    let j = stack.length - 1;

    while (i < j) {
      const n1 = stack[i];
      const n2 = stack[j];

      if ((n1 && n1.val) !== (n2 && n2.val)) {
        return false;
      }

      i++;
      j--;
    }

    i = 0;
    j = stack.length - 1;

    let nextStackLeft = [];
    let nextStackRight = [];

    while (i < j) {
      const n1 = stack[i];
      const n2 = stack[j];

      if (n1) {
        nextStackLeft.push(n1.left);
        nextStackLeft.push(n1.right);
      }

      if (n2) {
        nextStackRight.unshift(n2.right);
        nextStackRight.unshift(n2.left);
      }

      i++;
      j--;
    }

    if (nextStackLeft.length !== nextStackRight.length) {
      return false;
    }

    stack = nextStackLeft.concat(nextStackRight);
  }

  return true;
};
