const result = [];
function InOrderTraversal(root) { // 中序
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

function PreOrderTraversal(root) { // 前序
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

function preOrderTraversal2(root) { // 前序2
  if(root == null) return [];
  let stack = [], res = [];
  stack.push(root);
  while(stack.length) {
    let node = stack.pop();
    res.push(node.val);
    // 左孩子后进先出，进行先左后右的深度优先遍历
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
  }
  return res;
}

function PostOrderTraversal(root) { // 后序
  const stack = [];
  let node = root;
  let last = null;
  while(node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack[stack.length - 1];
    if (!node.right || node.right === last) {
      stack.pop();
      result.push(node.val);
      last = node;
      node = null; // 继续取栈顶，不然会重复取过已访问的节点
    } else {
      node = node.right;
    }
  }
  return result;
}
