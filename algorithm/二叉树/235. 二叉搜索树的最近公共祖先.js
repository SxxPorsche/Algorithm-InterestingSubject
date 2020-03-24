/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if(root === null || root === p || root === q) return root;
  // root.val 比 p 和 q 都大，找左孩子
  if(root.val > p.val && root.val > q.val)
    return lowestCommonAncestor(root.left, p, q);
  // root.val 比 p 和 q 都小，找右孩子
  if(root.val < p.val && root.val < q.val)
    return lowestCommonAncestor(root.right, p, q);
  else
    return root;
};

var lowestCommonAncestor2 = function(root, p, q) {
  let node = root;
  while(node) {
    if(p.val > node.val && q.val > node.val)
      node = node.right;
    else if(p.val < node.val && q.val < node.val)
      node = node.left;
    else return node;
  }
};
