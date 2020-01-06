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
    // 除了维护new的this绑定，我们还需要维护new导致的原型链变化
    // 执行new后返回的对象的原型链会指向bindFn
    // 但是我们调用bind后实际返回的是fBound，所以我们这里需要替换掉fBound的原型

    // 当执行Function.prototype.bind()时, this为Function.prototype
    // this.prototype(即Function.prototype.prototype)为undefined
    fNOP.prototype = this.prototype;
  }
  // 下行的代码使fBound.prototype是fNOP的实例,因此
  // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
  // fBound.prototype.__proto__ = fNop.prototype
  fBound.prototype = new fNOP();
  /**
   * 这样当new调用fBound后，实例依然能访问bindFn的原型方法
   * 为什么不直接fBound.prototype = this.prototype呢
   * 考虑下将fBound返回后，给fBound添加实例方法的情况
   * 即fBound.prototype.anotherMethod = function() {}
   * 如果将bindFn的原型直接赋值给fBound的原型，添加原型方法就会
   * 污染源方法即bindFn的原型
   */
  return fBound;
};


// 我们把关注点放在如何替换call方法上
Function.prototype.myBind2 = function(context, ...args) {
  var fToBind = this;
  var fNop = function() {};
  var fBound = function(...innerArgs) {
    // 我们将fToBind赋值给context一个属性上。
    context.__fn = fToBind;
    if(this instanceof fBound) {
      // 模拟new调用，创建一个新对象，新对象的原型链指向fBound的原型
      var instance = Object.create(fBound);
      instance.__fn = fToBind;
      var result = instance.__fn(...args, ...innerArgs);
      delete instance.__fn;
      // new调用时，如果构造函数返回了对象，使用返回的对象替换this
      if(result) return result;
      return instance;
    } else {
      // 在__fn没有显式绑定的情况下，__fn运行时this指向context
      var result = context.__fn(...args, ...innerArgs);
      // 调用完后将context的__fn属性删除
      delete context.__fn;
      return result;
    }
  }

  fNop.prototype = this.prototype;
  fBound.prototype = new fNop();
  return fBound;
}

// new
function myNew(constructor, ...args) {
  const instance = Object.create(constructor.prototype);
  const res = constructor.apply(instance, args);
  return typeof res === 'object' ? res : instance; // 返回值为object类型则作为new方法的返回值返回，否则返回上述全新对象
}
