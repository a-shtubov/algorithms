/**
 * @param {Array} arr
 * @returns {Node} root node
 * @example
 * [1, 2, 3, null, null, 4, 5]
 *
 * converts to
 *
 *          1
 *        /   \
 *       2     3
 *           /   \
 *          4     5
 */
export function arrayToBinaryTree(arr) {
  if (arr.length === 0) {
    return null;
  }

  let stack = [{}];
  let res = stack[0];
  let idx = 0;
  let pow = 0;
  let childIdx = 0;

  while (idx < arr.length) {
    const node = stack.shift();

    if (node) {
      const leftIdx = 2 ** (pow + 1) - 1 + childIdx * 2;
      const rightIdx = leftIdx + 1;
      const leftVal = arr[leftIdx];
      const rightVal = arr[rightIdx];

      node.val = arr[idx];
      node.left = leftVal !== null && leftVal !== undefined ? {} : null;
      node.right = rightVal !== null && rightVal !== undefined ? {} : null;
    }

    stack.push(node && node.left);
    stack.push(node && node.right);

    idx += 1;
    childIdx = (childIdx + 1) % 2 ** pow;
    pow = childIdx === 0 ? pow + 1 : pow;
  }

  return res;
}

/**
 * @param {Node} root
 * @returns {Node} an array
 * @example
 *          1
 *        /   \
 *       2     3
 *           /   \
 *          4     5
 *
 * converts to
 *
 * [1, 2, 3, null, null, 4, 5, null, null, null, null]
 */
export function binaryTreeToArray(root) {
  const stack = [root];
  const arr = [];

  while (stack.length !== 0) {
    const node = stack.shift();

    arr.push(node && node.val);

    if (node) {
      stack.push(node.left);
      stack.push(node.right);
    }
  }

  return arr;
}
