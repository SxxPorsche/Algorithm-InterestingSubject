/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let prev = null;
  /**
   * @return {boolean}
   */
  function InOrderTraversal(node) {
    if (!node) return true;
    if (!InOrderTraversal(node.left)) return false;
    if(prev !== null && prev >= node.val) return false;
    prev = node.val;
    return InOrderTraversal(node.right);
  }

  return InOrderTraversal(root);
};
// 皆为中序遍历
var isValidBST2 = function (root) {
  const stack = [];
  let node = root;
  let min = -Infinity;
  while(node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    if (node.val >= min) return false;
    min = node.val;
    node = node.right;
  }

  return true;
};


// 上下界法
var isValidBST3 = function(root) {
  const isBST = (node, min, max) => {
    if(node == null) return true;
    if(node.val >= max || node.val <= min) return false;
    // 左孩子更新上界，右孩子更新下界，相当于边界要求越来越苛刻
    return isBST(node.left, min, node.val)
      && isBST(node.right, node.val, max);
  };
  return isBST(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
};
