const isSymmetrical = (root1, root2) => {
  if (root1 === null && root2 === null) {
    return true;
  }
  if (root1 === null || root2 === null) {
    return false;
  }
  if (root1.val !== root2.val) {
    return false;
  }
  return isSymmetrical(root1.left, root2.right) && isSymmetrical(root1.right, root2.left);
};

var isSymmetrical2 = function(root) {
  if (!root) return false;
  const queue = [];
  if (root.left && root.right) {
    queue.push(root.left);
    queue.push(root.right);
  }
  while (queue.length) {
    let count = queue.length;
    while (count) {
      const node1 = queue.shift();
      const node2 = queue.pop();
      if (node1 && node2) {
        if (node1.val !== node2.val) {
          return false;
        }
        if (node1.left) queue.push(node1.left);
        if (node1.right) queue.push(node1.right);
        if (node2.left) queue.push(node2.left);
        if (node2.right) queue.push(node2.right);
      }
    }
    count -= 2;
  }
  return true;
};
