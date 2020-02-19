const {
  PreOrderTraversal,
  InOrderTraversal,
  PostOrderTraversal,
} = require('./traversal');

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function buildBinaryTree(preOrder, inOrder) {
  if (!inOrder.length || !preOrder.length) return null;
  const rootVal = preOrder.shift();
  const rootIndex = inOrder.indexOf(rootVal);
  const rootNode = new TreeNode(rootVal);
  rootNode.left = buildBinaryTree(preOrder, inOrder.slice(0, rootIndex));
  rootNode.right = buildBinaryTree(preOrder, inOrder.slice(rootIndex + 1));
  return rootNode;
}

function buildBinaryTree2(postOrder, inOrder) {
  if (!inOrder.length || !postOrder.length) return null;
  const rootVal = postOrder.pop();
  const rootIndex = inOrder.indexOf(rootVal);
  const rootNode = new TreeNode(rootVal);
  rootNode.right = buildBinaryTree2(postOrder, inOrder.slice(rootIndex + 1));
  rootNode.left = buildBinaryTree2(postOrder, inOrder.slice(0, rootIndex));
  return rootNode;
}

const preOrder = [1,2,4,7,3,5,6,8];
const inOrder = [4,7,2,1,5,3,8,6];
const postOrder = [7,4,2,5,8,6,3,1];
const tree1 = buildBinaryTree(preOrder, inOrder);
const tree2 = buildBinaryTree2(postOrder, inOrder);
console.log('pre:', PreOrderTraversal(tree2));
console.log('in:', InOrderTraversal(tree2));
console.log('post:', PostOrderTraversal(tree2));
// console.log('1:', tree1);
// console.log('2:', tree2);
