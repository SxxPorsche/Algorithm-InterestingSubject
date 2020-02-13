var reverseBetween = function(head, m, n) {
  let pre = null, cur = head, tail = head, i = 1;
  let next;
  while(i < m && cur) {
    pre = cur;
    cur = cur.next;
    i++;
  }
  tail = cur;
  while(i < n && cur) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
    i++;
  }
  tail.next = next;
  head.next = cur;
  return head;
};
