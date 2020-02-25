// Function.prototype.bind
Function.prototype.myBind = function (context = window, ...args) {
  const bindFn = this;
  const fBound = function () {
    // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
    // 这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数
    return bindFn.apply(this instanceof fBound ? this : context, // this 指向实例
      args.concat(Array.prototype.slice.call(arguments)))// 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
  };


  const fNOP = function () {};
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
  fBound.prototype = new fNOP(); // fBound.prototype = Object.create(this.prototype);
  /**
   * 这样当new调用fBound后，实例依然能访问bindFn的原型方法
   * 为什么不直接fBound.prototype = this.prototype呢
   * 考虑下将fBound返回后，给fBound添加实例方法的情况
   * 即fBound.prototype.anotherMethod = function() {}
   * 如果将bindFn的原型直接赋值给fBound的原型，添加原型方法就会污染源方法即bindFn的原型
   */
  return fBound;
};

// 我们把关注点放在如何替换call方法上
Function.prototype.myBind2 = function(context, ...args) {
  const fToBind = this;
  const fNop = function() {};
  const fBound = function(...innerArgs) {
    // 我们将fToBind赋值给context一个属性上。
    context.__fn = fToBind;
    if(this instanceof fBound) {
      // 模拟new调用，创建一个新对象，新对象的原型链指向fBound的原型
      const instance = Object.create(fBound);
      instance.__fn = fToBind;
      const result = instance.__fn(...args, ...innerArgs);
      delete instance.__fn;
      // new调用时，如果构造函数返回了对象，使用返回的对象替换this
      if(result) return result;
      return instance;
    } else {
      // 在__fn没有显式绑定的情况下，__fn运行时this指向context
      const result = context.__fn(...args, ...innerArgs);
      // 调用完后将context的__fn属性删除
      delete context.__fn;
      return result;
    }
  };

  fNop.prototype = this.prototype;
  fBound.prototype = new fNop();
  return fBound;
};

Function.prototype.myBind3 = function(context, ...args) {
  const fn = this;
  const bindFn = function (...newFnArgs) {
    return fn.call(
      this instanceof bindFn ? this : context,
      ...args, ...newFnArgs
    )
  };
  bindFn.prototype = Object.create(fn.prototype); // 将bindFn的原型链绑到this.prototype上
  return bindFn;
};
