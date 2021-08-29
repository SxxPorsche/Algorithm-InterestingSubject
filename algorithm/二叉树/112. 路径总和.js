/*
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。

叶子节点 是指没有子节点的节点。

输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  const stack = [];
  let total = 0;
  let node = root;
  let last = null; // 记住最近一次访问的节点，防止访问stack时, 循环取右节点
  while(node || stack.length > 0) {
    while (node) {
      total += node.val;
      stack.push(node);
      node = node.left;
    }
    node = stack[stack.length - 1];
    if (!node.right || node.right === last) {
      if(!node.right && !node.left) { // 叶子节点才计算结果
        if (total === targetSum) return true;
      }
      total -= node.val;
      stack.pop();
      last = node;
      node = null; // 继续取栈顶，不然会重复取过已访问的节点
    } else {
      node = node.right;
    }
  }
  return false;
};
