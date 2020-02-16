var isPalindrome = function(head) {
  function reverse(pre, cur) {
    if(!cur) return pre;
    let next = cur.next;
    cur.next = pre;
    return reverse(cur, next);
  }

  let slow, fast;
  let dummyHead = slow = fast = new ListNode(null);
  dummyHead.next = head;
  // 奇数的情况下，总是 fast为空先出现，偶数的情况下，总是fast.next先出现
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const next = slow.next;
  slow.next = null;

  let newHead = reverse(null, next);
  let oriHead = head;

  while(newHead) {
    if (oriHead.val !== newHead.val) return false;
    oriHead = oriHead.next;
    newHead = newHead.next;
  }

  return true;
};