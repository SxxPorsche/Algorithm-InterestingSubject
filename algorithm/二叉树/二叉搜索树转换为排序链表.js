/**
 * @return { TreeNode }
 */
function Convert(root) {
  let lastNode = null;
  function convertTree(node) {
    if (!node) return null;

    // 如果左子树为空，那么当前节点 node 为双向链表的头节点
    let head = convertTree(node.left);
    if (!head) head = node;

    // 连接当前节点 node 和当前链表的尾节点 lastNode
    node.left = lastNode;
    if (lastNode) lastNode.right = node;
    lastNode = node;

    convertTree(node.right);

    return head;
  }

  return convertTree(root);
}