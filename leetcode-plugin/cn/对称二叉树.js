//给定一个二叉树，检查它是否是镜像对称的。
//
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
//
//     1
//   / \
//  2   2
// / \ / \
//3  4 4  3
//
//
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
//
//     1
//   / \
//  2   2
//   \   \
//   3    3
//
//
// 说明:
//
// 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(!root) return true;
  // 递归解法
  /*
  function checkSymmetric(leftNode, rightNode) {
    if(!leftNode && !rightNode) return true;
    if(!leftNode || !rightNode) return false;
    return checkSymmetric(leftNode.left, rightNode.right) &&
      checkSymmetric(rightNode.left, leftNode.right) &&
      leftNode.val === rightNode.val;
  }
  return checkSymmetric(root.left, root.right);
  */
  // 层序遍历
  const queue = [];
  queue.push(root.left, root.right);
  while(queue.length) {
    const left = queue.shift();
    const right = queue.shift();
    if(!left ^ !right) return false;
    if(left && right) {
      if(left.val !== right.val) return false;
      queue.push(left.left);
      queue.push(right.right);
      queue.push(left.right);
      queue.push(right.left);
    }
  }
  return true;
};
