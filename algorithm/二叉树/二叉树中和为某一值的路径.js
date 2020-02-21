// 路径：树的根结点开始往下一直到叶结点所经过的结点形成一条路径
function FindPath(root, expectNumber) {
  if (!root) return [];
  const res = [];
  function DFS(node, path, number) {
    if (!node.left && !node.right && node.val === number) {
      res.push(path);
    }
    if (node.left) DFS(node.left, path.concat(node.left.val), number - node.val);
    if (node.right) DFS(node.right, path.concat(node.right.val), number - node.val);
  }
  DFS(root, [root.val], expectNumber);
  return res;
}

function FindPath2(root, expectNumber) {
  if (!root) return [];
  const res = [];
  const stack = [];
  function find(node, number) {
    stack.push(node.val);
    if (!node.left && !node.right && node.val === number) {
      res.push(stack.slice());
    } else {
      if (node.left) find(node.left, number - node.val);
      if (node.right) find(node.right, number - node.val);
    }
    stack.pop();
  }
  find(root, expectNumber);
  return res;
}
