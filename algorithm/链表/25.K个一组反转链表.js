var reverseKGroup = function(head, k) {
  let pre = null, cur = head, node = head;
  for(let i = 0; i < k; i++) {
    if(node == null) return head;
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


