/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let cur = head;
  let prev = { val: NaN };

  while (cur !== null) {
    if (cur.val === prev.val) {
      prev.next = cur.next;
    } else {
      prev = cur;
    }

    cur = cur.next;
  }

  return head;
};
