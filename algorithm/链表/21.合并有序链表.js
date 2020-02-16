var mergeTwoLists = function(l1, l2) {
  let dummyHead = new ListNode(null);
  let cur = dummyHead;
  while(l1 && l2) {
    if(l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  if (l1) cur.next = l1;
  if (l2) cur.next = l2;

  return dummyHead.next;
};


var mergeTwoLists2 = function(l1, l2) {
  function merge(h1, h2) {
    if (h1 == null) return h2;
    if (h2 == null) return h1;

    if(h1.val < h2.val) {
      h1.next = merge(h1.next, h2);
      return h1;
    } else {
      h2.next = merge(h1, h2.next);
      return h2;
    }
  }

  return merge(l1, l2);
};