var reverseKGroup = function(head, k) {
  let tail = head;
  const dummyHead = new ListNode(null);
  dummyHead.next = head;
  let pre = dummyHead;
  let cur;
  for(let i = 0; i < k; i++) {
    cur = cur.next;
  }
  head.next = tail;
};
