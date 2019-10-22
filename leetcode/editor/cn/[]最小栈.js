//设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
// push(x) -- 将元素 x 推入栈中。
// pop() -- 删除栈顶的元素。
// top() -- 获取栈顶元素。
// getMin() -- 检索栈中的最小元素。

/**
 * 设置辅助栈，与数据栈同步操作数据
 */
var MinStack = function() {
    this.dataStack = [];
    this.minStack = []; // 存储最小值的辅助栈
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.dataStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(x);
  }
  this.dataStack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const popUpEle = this.dataStack.pop();
  if (popUpEle === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.dataStack[this.dataStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj);
var param_4 = obj.getMin();
obj.pop();
console.log(obj);
var param_3 = obj.top();
var param_5 = obj.getMin();
console.log(param_4, param_3, param_5);
