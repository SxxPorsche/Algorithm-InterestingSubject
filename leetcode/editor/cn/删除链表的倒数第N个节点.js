//给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
//
// 示例：
//
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
//
//当删除了倒数第二个节点后，链表变为 1->2->3->5.
//
//
// 说明：
//
// 给定的 n 保证是有效的。
//
// 进阶：
//
// 你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let deleteNodePre = new ListNode(null);
    deleteNodePre.next = head;
    let tail = head;
    for(let i = 1; i < n; i += 1) {
      tail = tail.next;
    }
    while(tail && tail.next) {
      deleteNodePre = deleteNodePre.next;
      tail = tail.next;
    }

    if (deleteNodePre.next === head) {
      deleteNodePre.next = deleteNodePre.next.next;
      return deleteNodePre.next;
    }

    deleteNodePre.next = deleteNodePre.next.next;
    return head;
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

const arr = [1, 2, 3, 4, 5];
const head = new ListNode(arr[0]);
let tail = head;

for (let i = 1; i < arr.length; i += 1) {
  const node = new ListNode(arr[i]);
  tail.next = node;
  tail = node;
}

let node = removeNthFromEnd(head, 2);

while(node && node.next) {
  console.log(node.val);
  node = node.next;
}

console.log(node ? node.val : null);

