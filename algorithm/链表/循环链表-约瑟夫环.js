class ListNode {
  constructor(val, nxt) {
    this.index = val;
    this.next = nxt;
  }
}

function createList(n, m) {
  const head = new ListNode(0, null);
  let curNode = head;

  let count = 2;
  for (let i = 1; i < n; i++) {
    if (count !== m) {
      let tmp = new ListNode(i, null);
      curNode.next = tmp;
      curNode = tmp;
      count += 1;
    } else {
      count = 1;
    }
  }
  const prev = curNode;
  curNode.next = head;

  return { head, prev };
}

/**
 * @return {number}
 */
function JosephCircle(n, m) {
  if (m === 1) return n - 1;
  let { head, prev } = createList(n, m);
  let count = 1;
  while (head !== prev) {
    if (count === m) {
      prev.next = head.next;
      head = prev.next;
      count = 1;
    } else {
      prev = head;
      head = head.next;
      count += 1;
    }
  }

  return head.index;
}

console.log(JosephCircle(5, 2));
