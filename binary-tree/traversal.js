const result = [];
function InOrderTraversal(root) {
  if (root) {
    InOrderTraversal(root.left);
    result.push(root.val);
    InOrderTraversal(root.right);
  }
  return result;
}

function PreOrderTraversal(root) {
  if (root) {
    result.push(root.val);
    InOrderTraversal(root.left);
    InOrderTraversal(root.right);
  }
  return result;
}

function PostOrderTraversal(root) {
  if (root) {
    InOrderTraversal(root.left);
    InOrderTraversal(root.right);
    result.push(root.val);
  }
  return result;
}
