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
var diameterOfBinaryTree = function(root) {
  let help = (node) => {
    if(node === null) return 0;
    let left = node.left ? help(node.left) + 1: 0;
    let right = node.right ? help(node.right) + 1: 0;
    let cur = left + right;
    if(cur > max) max = cur;
    // 返回当前节点左右子树较长的路径到上层
    return Math.max(left, right);
  };
  let max = 0;
  help(root);
  return max;
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree2 = function(root) { // 低效解法
  // 求最大深度
  let maxDepth = (node) => {
    if(node == null) return 0;
    return Math.max(maxDepth(node.left) + 1, maxDepth(node.right) + 1);
  };
  let help = (node) => {
    if(node == null) return 0;
    let rootSum = maxDepth(node.left) + maxDepth(node.right);
    let childSum = Math.max(help(node.left), help(node.right));
    return Math.max(rootSum, childSum);
  };
  if(root == null) return 0;
  return help(root);
};


// 求树中节点左右子树高度和的最大值
