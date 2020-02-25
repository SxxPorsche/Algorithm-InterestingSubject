function ListNode(x){
    this.val = x;
    this.next = null;
}

function deleteDuplication(pHead)
{
  if (!pHead) return null;
  const dH = new ListNode(null);
  dH.next = pHead;
  let pre = dH, cur = pHead;
  while (cur) {
    if(cur.next && cur.next.val === cur.val){
      while(cur.next && cur.next.val === cur.val){
        cur = cur.next;
      }
      cur = cur.next;
      pre.next = cur;
    } else {
      pre = cur;
      cur = cur.next;
    }
  }

  return dH.next;
}

let head = new ListNode(1);
const dh = new ListNode(null);
dh.next = head;
const arr = [1,1,1,1,1,1,1,1, 2, 3, 4];
for (let i = 1; i< arr.length;i++) {
  head.next = new ListNode(arr[i]);
  head = head.next;
}
head = dh.next;

function print (node) {
  while (node) {
    console.log(node.val);
    node = node.next;
  }
}

print(deleteDuplication(head));