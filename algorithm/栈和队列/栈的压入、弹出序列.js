/**
 * @return {boolean}
 */
function IsPopOrder(pushV, popV) {
  const stack = [];
  for (let i = 0, j = 0; i < pushV.length; i++) {
    stack.push(pushV[i]);
    while (stack.length && stack[stack.length - 1] === popV[j]) {
      stack.pop();
      j++;
    }
  }
  return !stack.length;
}

console.log(IsPopOrder([1,2,3,4,5],[4,3,5,1,2]));
