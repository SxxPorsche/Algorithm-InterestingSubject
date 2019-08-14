var A = function() {};

A.prototype.n = 1;

var b = new A();

A.prototype = {
  n: 2,
  m: 3
};

var c = new A();

console.log('Part 1:');

console.log(b.n); // 1
console.log(b.m); // undefined

console.log(c.n); // 2
console.log(c.m); // 3

/*
同一个函数，我们通过 new 生成出来的实例，都会开出新的一块堆区
 */



// prototype指向原型，实例_proto_指向构造函数的原型
var F = function() {};

Object.prototype.a = function() {
  console.log('a');
};

Function.prototype.b = function() {
  console.log('b');
};

var f = new F();

console.log('Part 2:');

f.a(); // 'a'
console.log(f.b); // f.b is not a function;  f._proto_ => F.prototype = _proto_ => Object.prototype = _proto_ => null

F.a(); // 'a'  // F._proto_ => Function.prototype
F.b(); // 'b'


function Person(name) {
  this.name = name
}
let p = new Person('Tom');

console.log('Part 3:');

console.log(p.__proto__); // Person.prototype
console.log(Person.__proto__); // Function.prototype



var foo = {};
var Foo = function(){};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log('Part 4:');

console.log(foo.a);
console.log(foo.b);

console.log(Foo.a);
console.log(Foo.b);
