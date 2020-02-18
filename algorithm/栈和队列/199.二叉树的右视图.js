var rightSideView = function(root) {
  if (!root) return [];
  const queue = [];
  const res = [];
  queue.push(root);
  while (queue.length) {
    res.push(queue[0].val);
    let count = queue.length;
    while (count --) {
      const node = queue.shift();
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
  }
  return res;
};
