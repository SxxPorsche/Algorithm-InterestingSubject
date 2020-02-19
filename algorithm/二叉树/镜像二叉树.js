function Mirror(root) {
  function reverse(node) {
    if(!node) return null;
    const left = node.left;
    const right = node.right;
    node.left = reverse(right);
    node.right = reverse(left);
    return node;
  }

  reverse(root);
}
