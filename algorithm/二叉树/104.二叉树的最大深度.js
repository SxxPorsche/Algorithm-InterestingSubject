// 递归解法
var maxDepth1 = function(root) {
  if(!root) return 0;
  let leftHeight = 0;
  let rightHeight = 0;
  if (root.left === null && root.right === null) return 1;
  if (root.left) leftHeight = maxDepth1(root.left) + 1;
  if (root.right) rightHeight = maxDepth1(root.right) + 1;
  return Math.max(leftHeight, rightHeight);
};


// 非递归解法
var maxDepth2 = function(root) {
  if(!root) return 0;

  let length = 1;
  let count = 1;
  const tree = [];
  tree.push(root);

  while(tree.length) {
    while (count > 0) {
      const node = tree.shift();
      if(node.left) tree.push(node.left);
      if(node.right) tree.push(node.right);
      count -= 1;
    }
    if(tree.length) {
      count = tree.length;
      length += 1;
    }
  }

  return length;
};

// 非递归解法2 层序遍历
var maxDepth3 = (root) => {
  if(root == null) return 0;
  let queue = [root];
  let level = 0;
  while(queue.length) {
    let size = queue.length;
    while(size --) {
      let front = queue.shift();
      if(front.left) queue.push(front.left);
      if(front.right) queue.push(front.right);
    }
    // level ++ 后的值代表着现在已经处理完了几层节点
    level ++;
  }
  return level;
};
