var reverseBetween = function(head, m, n) {
  let count = n - m;
  const dummyHead = new ListNode(null); // 虚拟头指针，用来指向头指针
  dummyHead.next = head;
  let pre = dummyHead, cur = head, front, tail;
  for(let i = 1; i < m; i++) {
    pre = cur;
    cur = cur.next;
  }
  front = pre;
  tail = cur;
  for (let i = 0; i <= count; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  front.next = pre;
  tail.next = cur;

  return dummyHead.next;
};

var reverseBetween2 = function(head, m, n) {
  function reverse(pre, cur) {
    if(!cur) return pre;
    let next = cur.next;
    cur.next = pre;
    return reverse(cur, next);
  }
  let count = n - m;
  const dummyHead = new ListNode(null); // 虚拟头指针，用来指向头指针
  dummyHead.next = head;
  let pre = dummyHead, cur = head, front, tail, end;
  for(let i = 1; i < m; i++) {
    pre = cur;
    cur = cur.next;
  }
  front = pre;
  tail = cur;
  for(let i = 0; i < count; i++) {
    cur = cur.next;
  }
  end = cur.next; // 记录反转位置后的第一个节点
  cur.next = null; // 断开链表，防止一直反转到末尾
  front.next = reverse(null, tail);
  tail.next = end;

  return dummyHead.next;
};
