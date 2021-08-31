const currying1 = fn => {
  const judge = (...args) =>
    args.length >= fn.length ? fn(...args) : (...arg) => judge(...args, ...arg);
  return judge;
};
// 注释 1：第一次调用获取函数 fn 参数的长度
//
// 注释 2：currying 包裹之后返回一个新函数，接收参数为 ...args
//
// 注释 3：新函数接收的参数长度是否大于等于 fn 剩余参数需要接收的长度
//
// 注释 4：满足要求，执行 fn 函数，传入新函数的参数
//
// 注释 5：不满足要求，递归 currying 函数

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

const add = (a, b) => a + b;
const addFn = curry(add);
console.log(addFn);
console.log(addFn(1, 10)(100)(2, 4));
