//反转一个单链表。
//
// 示例:
//
// 输入: 1->2->3->4->5->NULL
//输出: 5->4->3->2->1->NULL
//
// 进阶:
//你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* 迭代
var reverseList = function(head) {
  let pointer = head;
  const list = [];
  while(pointer) {
    list.push(pointer);
    pointer = pointer.next;
  }
  for (let i = list.length - 1; i >= 0; i -= 1) {
    list[i].next = list[i - 1] || null;
  }
  return list[list.length - 1] || null;
};
*/

// 递归

var reverseList = function(head) {
  if (head == null || head.next == null) return head;

  function reverse(node) {
    if (!node.next) {
      return node;
    }
    reverse(node.next).next = node;
    node.next = null;
    return node;
  }

  return reverse(head);
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const arr = [];
const head = new ListNode(arr[0]);
let tail = head;

for (let i = 1; i < arr.length; i += 1) {
  const node = new ListNode(arr[i]);
  tail.next = node;
  tail = node;
}

let node = reverseList(head);

while(node && node.next) {
  console.log(node.val);
  node = node.next;
}

console.log(node ? node.val : null);
