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

// 自上而下递归 二分法
var mergeKLists = function(lists) {
  function mergeList(lists, start, end) {
    if(end - start < 0) return null;
    if(end - start === 0) return lists[end];
    let mid = Math.floor((start + end) / 2);
    return merge(mergeList(lists, start, mid), mergeList(lists, mid + 1, end));

  }

  return mergeList(lists, 0, lists.length - 1);
};

// 自下而上
var mergeKLists = function(lists) {
  if(!lists || !lists.length) return null;

  let dummyHeads = [];
  // 初始化虚拟头指针
  for(let i = 0; i < lists.length; i++) {
    let node = new ListNode(null);
    node.next = lists[i];
    dummyHeads[i] = node;
  }

  for(let size = 1; size < lists.length; size += size){
    for(let i = 0; i + size < lists.length; i += 2 * size) {
      dummyHeads[i].next = merge(dummyHeads[i].next, dummyHeads[i + size].next);
    }
  }
  return dummyHeads[0].next;
};