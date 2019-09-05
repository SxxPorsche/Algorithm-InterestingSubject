// Array.prototype.map
Array.prototype.myMap = function(callback, thisArg) {
  const arr = Array.prototype.slice.call(this); //  防止上下文改变this
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback.call(thisArg, arr[i], i, arr));
  }
  return result;
};

// Array.prototype.reduce
Array.prototype.myReduce = function(callback, initVal) {
  const arr = Array.prototype.slice.call(this);
  let result = initVal || arr[0];
  const startIndex = initVal ? 0 : 1;
  for (let i = startIndex; i < arr.length; i++) {
    result = callback.call(this, result, arr[i], i, arr);
  }
  return result;
};

// Function.prototype.call, Function.prototype.apply
// Function.prototype.myApply = function(context = window, args) args: []
Function.prototype.myCall = function(context = window, ...args) {
  let savedFn;
  if (context.fn) {
    savedFn = context.fn;
  }
  context.fn = this;
  let res = context.fn(...args);

  if (savedFn) {  // 如果savedFn存在，则把它放回去
    context.fn = savedFn;
  } else {    // 否则，删除fn属性
    delete context.fn;
  }

  return res;
};

// Object.create
Object.prototype.myCreate = function (proto) {
  if (proto !== null && (typeof proto === 'object' || typeof proto === 'function')) {
    function F() {}
    F.prototype = proto;
    return new F();
  }
};

// Function.prototype.bind
Function.prototype.myBind = function (context = window, ...args) {
  const bindFn = this;
  const fNOP = function () {};
  const fBound = function () {
    // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
    return bindFn.apply(this instanceof fBound ? this : context,
      args.concat(Array.prototype.slice.call(arguments)))// 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
  };
  if (this.prototype) {
    // 当执行Function.prototype.bind()时, this为Function.prototype
    // this.prototype(即Function.prototype.prototype)为undefined
    fNOP.prototype = this.prototype;
  }
  // 下行的代码使fBound.prototype是fNOP的实例,因此
  // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
  fBound.prototype = new fNOP();
  return fBound;
};

// new
function myNew(constructor, ...args) {
  const instance = Object.create(constructor.prototype);
  const res = constructor.apply(instance, args);
  return typeof res === 'object' ? res : instance; // 返回值为object类型则作为new方法的返回值返回，否则返回上述全新对象
}
