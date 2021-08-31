/*
给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const nums = [1,2,3,4,5];
let head = new ListNode(1);
let cur = head;
for(let i = 1; i < nums.length; i ++) {
  cur.next = new ListNode(nums[i]);
  cur = cur.next;
}

// console.log(head);

var reverseKGroup = function(head, k) {
  if (!head) return null;
  let pre = null, cur = head, node = head;
  for(let i = 0; i < k; i++) {
    if (!node) return head;
    node = node.next;
  }
  for(let i = 0; i < k; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  head.next = reverseKGroup(cur, k);
  return pre;
};

function printList(head) {
  let cur = head;
  while (cur) {
    console.log(cur);
    cur = cur.next;
  }
}

printList(reverseKGroup(head, 3));
