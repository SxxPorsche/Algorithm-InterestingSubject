//给定一个二叉树，找出其最大深度。
//
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
//
// 说明: 叶子节点是指没有子节点的节点。
//
// 示例：
//给定二叉树 [3,9,20,null,null,15,7]，
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
// 返回它的最大深度 3 。
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
 * @return {number}
 */

/*
递归解法
var maxDepth = function(root) {
  if(!root) return 0;
  let leftHeight = 0;
  let rightHeight = 0;
  if (root.left === null && root.right === null) return 1;
  if (root.left) leftHeight = maxDepth(root.left) + 1;
  if (root.right) rightHeight = maxDepth(root.right) + 1;
  return Math.max(leftHeight, rightHeight);
};
*/

// 非递归解法
var maxDepth = function(root) {
  if(!root) return 0;

  let length = 1;
  let count = 1;
  const tree = [];
  tree.push(root);

  while(tree.length) {
    while (count > 0) {
      const node = tree.shift();
      if(node.left) tree.push(node.left);
      if(node.right) tree.push(node.right);
      count -= 1;
    }
    if(tree.length) {
      count = tree.length;
      length += 1;
    }
  }

  return length;
};
