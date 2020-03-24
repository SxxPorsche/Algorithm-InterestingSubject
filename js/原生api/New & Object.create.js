// new
function myNew(constructor, ...args) {
  const instance = Object.create(constructor.prototype);
  // const instance = new Object();
  // instance.__proto__ = constructor.prototype;
  const res = constructor.apply(instance, args);
  return typeof res === 'object' ? res : instance; // 返回值为object类型则作为new方法的返回值返回，否则返回上述全新对象
}

// Object.create
Object.prototype.myCreate = function (proto) {
  if (proto !== null && (typeof proto === 'object' || typeof proto === 'function')) {
    function F() {}
    F.prototype = proto;
    return new F();
  }
};
