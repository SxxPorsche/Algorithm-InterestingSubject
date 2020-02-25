const result = [];
function InOrderTraversal(root) {
  const stack = [];
  let node = root;
  while(node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }
  return result;
}

function PreOrderTraversal(root) {
  const stack = [];
  let node = root;
  while(node || stack.length > 0) {
    while (node) {
      result.push(node.val);
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    node = node.right;
  }
  return result;
}

function PostOrderTraversal(root) {
  const stack = [];
  let node = root;
  while(node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack[stack.length - 1];
    if (node.right) {
      node = node.right;
    } else {
      stack.pop();
      result.push(node.val);
      node = stack[stack.length - 1].right;
    }
  }
  return result;
}
