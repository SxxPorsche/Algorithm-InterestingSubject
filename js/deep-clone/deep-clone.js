// 可枚举的对象类型
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';

// 不可枚举的对象类型
const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const functionTag = '[object Function]';

function getType(target) {
  return Object.prototype.toString.call(target);
}

function initResult(target, targetType) {
  const constructor = target.constructor;
  if (targetType === symbolTag) { // clone Symbol对象
    return Object(Symbol.prototype.valueOf.call(target));
  }
  if (targetType === regexpTag) { // clone RegExp对象
    const reFlags = /\w*$/;
    const result = new constructor(target.source, reFlags.exec(target)); // 返回当前匹配的文本
    result.lastIndex = target.lastIndex; // 复制下一次匹配的索引
    return result;
  }
  return new constructor();
}

function isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}

const map = new WeakMap(); // 弱引用对象，垃圾回收机制会自动帮我们回收

function deepClone(target) {
  const targetType = getType(target);
  if (isObject(target)) {
    // 初始化跟target同类型的对象
    const res = initResult(target, targetType);

    // 克隆循环引用
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, res);

    // 克隆Set
    if (targetType === setTag) {
      target.forEach((value) => {
        res.add(deepClone(value));
      });
      return res;
    }

    // 克隆Map
    if (targetType === mapTag) {
      target.forEach((value, key) => {
        res.set(key, deepClone(value));
      });
      return res;
    }

    if (targetType === functionTag) { // 假克隆函数
      return target;
    }

    for (const key in target) { // 可用while优化
      // 使用 hasOwnProperty 判断对象 nextSource 中是否存在属性 nextKey
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        res[key] = deepClone(target[key]);
      }
    }
    return res;
  } else {
    return target;
  }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8],
  empty: null,
  map: (new Map()).set('a', 1),
  set: (new Set()).add('b'),
  bool: Boolean(true),
  num: Number(2),
  str: String(2),
  symbol: Object(Symbol(1)),
  date: new Date(),
  reg: /\d+/,
  error: new Error(),
  func1: () => {
    console.log('code秘密花园');
  },
  func2: function (a, b) {
    console.log(a + b);
    return a + b;
  }
};

const b = deepClone(target);
b.func1();
b.func2(1, 2);
