// 1. Set判重 时间 & 空间复杂度高
var hasCycle1 = (head) => {
  let set = new Set();
  let p = head;
  while(p) {
    // 同一个节点再次碰到，表示有环
    if(set.has(p)) return true;
    set.add(p);
    p = p.next;
  }
  return false;
};

// 2. 快慢指针
var hasCycle2 = function(head) {
  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  let fast = dummyHead;
  let slow = dummyHead;
  // 零个结点或者一个结点，肯定无环
  if(fast.next === null || fast.next.next === null) return false;
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    // 两者相遇了
    if(fast === slow) {
      return true;
    }
  }
  return false;
};
