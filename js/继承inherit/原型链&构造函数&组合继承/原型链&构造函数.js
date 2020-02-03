// 原型链
// 缺点：多个实例共享父类的引用类型
function Super() {
  this.name = 'father';
}

Super.prototype.getName = function () {
  console.log(this.name);
};

function Sub() {
}

Sub.prototype = new Super();
const sub = new Sub();

// 借用构造函数
// 缺点：
// 1. 只能继承父类的实例属性和方法，不能继承原型属性/方法
// 2. 无法实现复用，每个子类都有父类实例函数的副本，影响性能
function Sub2() {
  Super.call(this);
}
// 每个实例独立副本
const sub2 = new Sub2();
const sub3 = new Sub2();
