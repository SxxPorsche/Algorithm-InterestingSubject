/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 判断是否为子树
function isSame(p1, p2) {
  if (!p2) return true;
  if (!p1 || p1.val !== p2.val) return false;
  return isSame(p1.left, p2.left) && isSame(p1.right, p2.right);
}

/**
 * @return {boolean}
 */
function HasSubtree(pRoot1, pRoot2) {
  if (pRoot1 && pRoot2) {
    return isSame(pRoot1, pRoot2) ||
      HasSubtree(pRoot1.left, pRoot2) ||
      HasSubtree(pRoot1.right, pRoot2)
  }
  return false;
}
