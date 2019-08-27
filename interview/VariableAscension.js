// Problem 1
// Foo 的构建方法，没有产生实例，此刻也没有执行
function Foo() {
  Foo.a = function() {
    console.log(1)
  };
  this.a = function() { // 内部属性方法在实例中优先级最高
    console.log(2)
  }
}

// Foo 上挂载了原型方法 a
Foo.prototype.a = function() {
  console.log(3)
};

// Foo 上挂载了直接方法
Foo.a = function() {
  console.log(4)
};

Foo.a(); // 4

let obj = new Foo();
/* 这里调用了 Foo 的构建方法。Foo 的构建方法主要做了两件事：
1. 将全局的 Foo 上的直接方法 a 替换为一个输出 1 的方法。
2. 在新对象上挂载直接方法 a ，输出值为 2。
*/

obj.a(); // 2 因为有直接方法 a ，不需要去访问原型链，所以使用的是构建方法里所定义的 this.a
Foo.a(); // 1


// Problem 2
var name = 'Tom';
(function() {
  // 相当于这里有个 var name;
  console.info('name', name); // undefined
  console.info('typeof name', typeof name); // undefined
  if (typeof name == 'undefined') {
    var name = 'Jack'; // 这里的声明会提升, 到这句才赋值
    console.log('Goodbye ' + name);
  } else {
    console.log('Hello ' + name);
  }
})(); // GoodBye Jack
