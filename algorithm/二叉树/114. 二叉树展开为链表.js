/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if(root == null) return;
  flatten(root.left);
  flatten(root.right);
  if(root.left) {
    let p = root.left;
    while(p.right) {
      p = p.right;
    }
    p.right = root.right;
    root.right = root.left;
    root.left = null;
  }
};

var flatten2 = function(root) { // 非递归
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
      if (node.left) {
        let p = node.left;
        while(p.right) {
          p = p.right;
        }
        p.right = node.right;
        node.right = node.left;
        node.left = null;
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
