//给定一个二叉树，判断其是否是一个有效的二叉搜索树。
//
// 假设一个二叉搜索树具有如下特征：
//
//
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
//
//
// 示例 1:
//
// 输入:
//    2
//   / \
//  1   3
//输出: true
//
//
// 示例 2:
//
// 输入:
//    5
//   / \
//  1   4
//     / \
//    3   6
//输出: false
//解释: 输入为: [5,1,4,null,null,3,6]。
//     根节点的值为 5 ，但是其右子节点值为 4 。
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  /*
  function checkValid(node, min = -Infinity, max = Infinity) { // min : 下界， max: 上界
    if(!node) return true;
    const val = node.val;
    if(val <= min || val >= max) return false;
    if(!checkValid(node.right, val, max)) return false;
    if(!checkValid(node.left, min, val)) return false;
    return true;
  }

  return checkValid(root);
  */

  // 中序遍历： 左子树 -> 结点 -> 右子树 意味着对于二叉搜索树而言，每个元素都应该比下一个元素小。
  const stack = [];

  let node = root;
  let min = -Infinity;

  while(stack.length || node) {
    while(node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    if(node.val <= min) return false;
    min = node.val;
    node = node.right;
  }

  return true;
};

