var reverseList1 = function(head) {
  if (!head) return null;
  let pre = null, cur = head;
  while(cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
};

var reverseList2 = function(head) {
  function reverse(pre, cur) {
    if(!cur) return pre;
    let next = cur.next;
    cur.next = pre;
    return reverse(cur, next);
  }

  return reverse(null, head);
};
