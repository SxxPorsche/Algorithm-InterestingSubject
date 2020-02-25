// 平衡就是左右子树的高度差不超过1
/**
 * @return {boolean}
 */
function IsBalanced_Solution(pRoot) {
  if (!pRoot) return true;
  const getTreeDepth = (pRoot) => {
    if (!pRoot) return 0;
    return 1 + Math.max(getTreeDepth(pRoot.left), getTreeDepth(pRoot.right));
  };
  return Math.abs(getTreeDepth(pRoot.left) - getTreeDepth(pRoot.right)) <= 1;
}