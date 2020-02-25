/**
 * @return {null}
 */
function FindFirstCommonNode(pHead1, pHead2) {
  const set = new Set();
  let p1 = pHead1, p2 = pHead2;
  while (p1) {
    set.add(p1);
    p1 = p1.next;
  }
  while (p2) {
    if (set.has(p2)) return p2;
    p2 = p2.next;
  }
  return null;
}

/**
 * @return {null}
 */
function FindFirstCommonNode2(pHead1, pHead2) {
  if (!pHead1 || !pHead2) return null;
  let p1 = pHead1, p2 = pHead2;

  while(p1 !== p2){
    p1 = p1.next;
    p2 = p2.next;
    if(p1 !== p2){
      if(p1 == null) p1 = pHead2;
      if(p2 == null) p2 = pHead1;
    }
  }
  return p1;
}

