var swapPairs = function(head) {
  if (head === null || head.next === null) return head;
  const dummyHead = new ListNode(null); // 虚拟头指针，用来指向头指针
  dummyHead.next = head;
  let pre = dummyHead;
  let node1 = head, node2 = head.next;
  while(node1 && node2) {
    node1.next = node2.next;
    node2.next = node1;
    pre.next = node2;
    pre = node1;
    node1 = pre.next;
    node2 = node1 && node1.next;
  }
  return dummyHead.next;
};

var swapPairs2 = function(head) {
  if (head === null || head.next === null) return head;
  let node1 = head, node2 = head.next;
  node1.next = swapPairs2(node2.next);
  node2.next = node1;
  return node2;
};
