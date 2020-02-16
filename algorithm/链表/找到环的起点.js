// 快慢指针相遇之后，让新指针从头出发，和慢指针同时前进，
// 且每次前进一步，两者相遇的地方，就是环起点

var detectCycle = function(head) {
  let dummyHead = new ListNode();
  dummyHead.next = head;
  let fast = dummyHead;
  let slow = dummyHead;
  // 零个结点或者一个结点，肯定无环
  if(fast.next === null || fast.next.next === null)
    return null;
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    // 两者相遇了
    if(fast === slow) {
      let p = dummyHead;
      while(p !== slow) {
        p = p.next;
        slow = slow.next;
      }
      return p;
    }
  }
  return null;
};