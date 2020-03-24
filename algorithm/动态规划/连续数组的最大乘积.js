const getMaxSum = (arr) => {
  let maxSum = 0;
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (!stack.length || arr[i] >= arr[stack[stack.length - 1]]) { // 构造单调递增栈
      stack.push(i);
    } else {
      while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
        maxSum = Math.max(getArrSum(stack, arr, i), maxSum);
      }
      stack.push(i);
    }
  }
  while(stack.length) {
    maxSum = Math.max(getArrSum(stack, arr, arr.length), maxSum);
  }
  return maxSum;
};

const getArrSum = (stack, arr, index) => {
  const topIndex = stack[stack.length - 1];
  stack.pop();
  let sum = stack.length ?
    getSum(arr.slice(stack[stack.length - 1] + 1, index)) : getSum(arr.slice(0, index));
  return sum * arr[topIndex];
};

const getSum = (arr) => arr.reduce((total, a) => total + a, 0);

console.log(getMaxSum([3, 1, 6, 4, 5, 2]));
