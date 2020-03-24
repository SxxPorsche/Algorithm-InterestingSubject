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
var maxPathSum = function(root) {
  const traversal = (node) => {
    if(node == null) return 0;
    let left = Math.max(traversal(node.left), 0);
    let right = Math.max(traversal(node.right), 0);
    let cur = left + node.val + right;
    // 如果发现某一个节点上的路径值比max还大，则更新max
    if(cur > max) max = cur;
    // 返回上层时，选取值较大的那一条路径
    return Math.max(left, right) + node.val;
  };
  let max = Number.MIN_SAFE_INTEGER;
  traversal(root);
  return max;
};
