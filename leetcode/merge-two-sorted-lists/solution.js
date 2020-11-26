/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  const cond = l1.val <= l2.val;
  let cur1 = cond ? l1 : l2;
  let cur2 = cond ? l2 : l1;

  while (cur1 !== null && cur2 !== null) {
    if (cur1.next === null) {
      cur1.next = cur2;
      break;
    }

    if (cur1.next.val > cur2.val) {
      const tmp = cur1.next;

      cur1.next = cur2;
      cur2 = cur2.next;
      cur1.next.next = tmp;
      cur1 = cur1.next;
    } else {
      cur1 = cur1.next;
    }
  }

  return cond ? l1 : l2;
};
