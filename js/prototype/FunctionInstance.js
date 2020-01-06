function Foo() {
  // js中，如果对于一个变量没用用var 或者 let等声明的话，他就默认是全局属性,就是window对象的一个属性
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(this, 4);
};
function getName() { // 函数声明优先级最高，提升到当前作用域的最顶端
  console.log(5);
}
Foo.getName(); // 2
getName(); // 4
Foo().getName(); // 1  // Foo() 返回window对象，绑定getName属性
getName(); // 1 此时window上的getName已变为Foo中的getName
// new 来返回一个 Foo.getName 的实例。因为new的过程中一步很重要的操作是通过call将this绑定到实例对象上，并将实例对象返回
new Foo.getName(); //  2
new Foo().getName(); // 3 等价于(new Foo()).getName()， new Foo()得到一个实例对象，到原型链上寻找getName
new new Foo().getName(); // 3 等价于 new ((new Foo()).getName()) 所以得到一个Foo.geName(原型链上的getName)实例对象
// 3 是在 (new Foo()).getName() 时输出

/*
new Foo() 属于new（带参数列表）
new Foo属于new（无参数列表）

无参数列表的优先级为18，而成员访问的优先级为19，高于无参数列表。因此new Foo.getName()先执行Foo.getName()

带参数列表的优先级为19，而成员访问的优先级也为19，按照运算符规则（同一优先级，按照从左向右的执行顺序），new Foo().getName()先执行new Foo()，再对new之后的实例进行成员访问.getName()操作。
*/

