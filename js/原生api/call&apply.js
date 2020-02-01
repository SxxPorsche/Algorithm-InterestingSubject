// Function.prototype.call, Function.prototype.apply
// Function.prototype.myApply = function(context = window, args) args: []
Function.prototype.myCall = function(context = window, ...args) {
  let savedFn; // 用来存储context原来的属性
  // 或者可以使用Symbol防止属性重复
  /* const key = Symbol();
     context[key] = this;
     const res = context[key](...args);
     delete context[key];
   */
  if (context.fn) {
    savedFn = context.fn;
  }
  context.fn = this; // 此时的this为调用call的函数
  let res = context.fn(...args);

  if (savedFn) {  // 如果savedFn存在，则把它放回去
    context.fn = savedFn;
  } else {    // 否则，删除fn属性
    delete context.fn;
  }

  return res;
};
