//给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
//
// 例如:
//给定二叉树: [3,9,20,null,null,15,7],
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回其层次遍历结果：
//
// [
//  [3],
//  [9,20],
//  [15,7]
//]
//
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return [];

  let count = 1;
  const tree = [];
  tree.push(root);

  const res = [[root.val]];

  while(tree.length) {
    while (count > 0) {
      const node = tree.shift();
      if(node.left) tree.push(node.left);
      if(node.right) tree.push(node.right);
      count -= 1;
    }
    if(tree.length) {
      count = tree.length;
      res.push(tree.map((node) => node.val));
    }
  }

  return res;
};
