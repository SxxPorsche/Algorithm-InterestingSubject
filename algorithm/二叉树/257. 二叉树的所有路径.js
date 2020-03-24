/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const stack = [], result = [];
  let node = root;
  let last = null;
  while(node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack[stack.length - 1];
    if (!node.right || node.right === last) {
      if(!node.right && !node.left) { // 叶子节点才计算结果
        result.push(stack.map(item => item.val).join('->'));
      }
      stack.pop();
      last = node;
      node = null; // 继续取栈顶，不然会重复取过已访问的节点
    } else {
      node = node.right;
    }
  }
  return result;
};

var binaryTreePaths2 = function(root) { // 递归解法
  const res = [], path = [];
  const traversal = (node) => {
    if (node) {
      path.push(node);
      PostOrderTraversal(node.left);
      PostOrderTraversal(node.right);
      if(!node.left && !node.right)
        res.push(path.map(item => item.val).join('->'));
      // 注意每访问完一个节点记得把它从path中删除，达到回溯效果
      path.pop();
    }
    return node;
  };
  traversal(root);
  return res;
};
