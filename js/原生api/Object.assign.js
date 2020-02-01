// Object.assign
if (typeof Object.assign2 !== 'function') {
  Object.defineProperty(Object, 'assign2', {
    value: function (target) {
      'use strict';
      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index]; // 需为可枚举对象

        if (nextSource !== null && nextSource !== undefined) {
          // 使用 for..in 遍历对象 nextSource 获取属性值
          // 此处会同时检查其原型链上的属性
          for (var nextKey in nextSource) {
            // 使用 hasOwnProperty 判断对象 nextSource 中是否存在属性 nextKey
            // 过滤其原型链上的属性
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    enumerable: false,  // 不可枚举
    writable: true,
    configurable: true
  });
}
