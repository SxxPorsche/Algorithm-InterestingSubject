var A = function() {};

A.prototype.n = 1;

var b = new A();

A.prototype = {
  n: 2,
  m: 3
};

var c = new A();

console.log(b.n); // 1
console.log(b.m); // undefined

console.log(c.n); // 2
console.log(c.m); // 3

/*
同一个函数，我们通过 new 生成出来的实例，都会开出新的一块堆区
 */




var F = function() {};

Object.prototype.a = function() {
  console.log('a');
};

Function.prototype.b = function() {
  console.log('b');
};

var f = new F();

f.a();
f.b();

F.a();
F.b();


function Person(name) {
  this.name = name
}
let p = new Person('Tom');

console.log(p._proto_);
console.log(Person._proto_);



var foo = {};
var Foo = function(){};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a);
console.log(foo.b);

console.log(Foo.a);
console.log(Foo.b);
