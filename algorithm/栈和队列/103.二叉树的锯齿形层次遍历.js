var zigzagLevelOrder = function(root) {
  if (!root) return [];
  const queue = [];
  const res = [];
  queue.push(root);
  let level = 0;
  while (queue.length) {
    res.push([]);
    let count = queue.length;
    while (count --) {
      const node = queue.shift();
      if (level % 2 === 0) {
        res[level].push(node.val);
      } else {
        res[level].unshift(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++;
  }
  return res;
};
