// "[object Type]"
Object.prototype.toString.call('An'); // "[object String]"
Object.prototype.toString.call(1); // "[object Number]"
Object.prototype.toString.call(Symbol(1)); // "[object Symbol]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(function(){}); // "[object Function]"
Object.prototype.toString.call({ name: 'An' }); // "[object Object]"
Object.prototype.toString.call([]); // "[object Array]"

// bool
// 无法区分 object派生类型
console.log([] instanceof Object); // true
console.log([] instanceof Array); // true
// instanceof是判断类型的prototype是否出现在对象的原型链中，但是对象的原型可以随意修改，所以这种判断并不准确
const obj = {};
obj.__proto__ = Array.prototype;
// Object.setPrototypeOf(obj, Array.prototype)
console.log(obj instanceof Array); // true

// Array类型
Array.isArray([]); //true

// typeof 只能检测 基本数据类型，包括boolean, undefined, string, number, symbol, function
// 原理：变量的机器码的低位1-3位会存储其类型信息
// null, Array, Object, 使用typeof出来都是Object。无法检测具体是哪种引用类型。

console.log(arr.constructor); // ƒ Array();
