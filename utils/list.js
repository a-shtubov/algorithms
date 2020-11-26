/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export function listToArr(list) {
  let cur = list;
  let res = [];

  while (cur !== null) {
    res.push(cur.val);
    cur = cur.next;
  }

  return res;
}

export function arrToList(arr) {
  let list = { val: arr[0], next: null };
  let cur = list;
  let i = 1;

  while (i < arr.length) {
    cur.next = { val: arr[i], next: null };
    cur = cur.next;
    i++;
  }

  return list;
}
