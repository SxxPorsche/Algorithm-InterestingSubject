/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  const res = [];
  function InOrderTraversal(root) {
    if (root) {
      InOrderTraversal(root.left);
      res.push(root.val);
      InOrderTraversal(root.right);
    }
  }

  let i = 0;
  while (i < res.length) {

  }

  return true;
};
