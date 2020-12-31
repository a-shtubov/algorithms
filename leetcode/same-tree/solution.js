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
var isSameTree = function (p, q) {
  let stack1 = [p];
  let stack2 = [q];

  while (stack1.length > 0 || stack2.length > 0) {
    if (stack1.length !== stack2.length) {
      return false;
    }

    const n1 = stack1.shift();
    const n2 = stack2.shift();

    if ((n1 && n1.val) !== (n2 && n2.val)) {
      return false;
    }

    if (n1 !== null) {
      stack1.push(n1.left);
      stack1.push(n1.right);
    }

    if (n2 !== null) {
      stack2.push(n2.left);
      stack2.push(n2.right);
    }
  }

  return true;
};
