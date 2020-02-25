/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null; // 指向父节点的指针
}*/
/**
 * @return {null}
 */
// 二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回
function GetNext(pNode) {
  if(pNode === null) return null;

  if(pNode.right !== null){
    pNode = pNode.right;
    while(pNode.left !== null)
      pNode = pNode.left;
    return pNode;
  }

  while(pNode.next !== null){
    if(pNode.next.left === pNode)
      return pNode.next;
    pNode = pNode.next;
  }
  return null;
}