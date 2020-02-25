const result1 = [];
function InOrderTraversal(root) {
  if (root) {
    InOrderTraversal(root.left);
    result1.push(root.val);
    InOrderTraversal(root.right);
  }
  return result1;
}

const result2 = [];
function PreOrderTraversal(root) {
  if (root) {
    result2.push(root.val);
    PreOrderTraversal(root.left);
    PreOrderTraversal(root.right);
  }
  return result2;
}

const result3 = [];
function PostOrderTraversal(root) {
  if (root) {
    PostOrderTraversal(root.left);
    PostOrderTraversal(root.right);
    result3.push(root.val);
  }
  return result3;
}

module.exports = {
  PreOrderTraversal,
  InOrderTraversal,
  PostOrderTraversal,
};
