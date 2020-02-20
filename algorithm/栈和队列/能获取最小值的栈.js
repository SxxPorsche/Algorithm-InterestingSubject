const stack = [];
const minStack = [];
function push(node) {
  stack.push(node);
  if (!minStack.length) {
    minStack.push(node);
  } else if (node < minStack[minStack.length - 1]) {
    minStack.push(node);
  }
}
function pop() {
  const node = stack.pop();
  if (node === minStack[minStack.length - 1]) minStack.pop();
  return node;
}
function top() {
  return stack[stack.length - 1];
}
function min() {
  return minStack[minStack.length - 1];
}

