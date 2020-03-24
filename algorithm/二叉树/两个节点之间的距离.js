/*
二叉树两个节点的距离, 距离是指从 a 节点到达 b 节点需要经过至少多少条边, 如 4 和 5 距离是 2, 3 和 4 距离是 3;
        1
     2     3
   4   5 6   7
*/

/**
 * Definition for a binary tree node.
   interface Node {
    depth: number; // 当前节点在树的第几层
    parent: Node; // 父节点
    leftChild: Node; // 左子节点
    rightChild: Node; // 右子节点
  }
*/


function getDistance(node1, node2) {
  if (!node1 || !node2) return 0;
  let res = 0;
  let a = node1, b = node2;
  if (a.depth < b.depth) [a, b] = [b, a];
  while (a && a.depth !== b.depth) {
    a = a.parent;
    res ++;
  }
  while (a !== b) {
    a = a.parent;
    b = b.parent;
    res += 2;
  }
  return res;
}
