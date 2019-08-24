(function A() { // 相当于const A = function
  console.log(A); // [Function A]
  A = 1; // 所以在 NFE 函数体内对 A 重新赋值是无效的
  // strict模式下： "Uncaught TypeError: Assignment to constant variable."
  console.log(window.A); // undefined
  console.log(A); // [Function A]
}())
// 这是一个立即执行的函数表达式（Immediately-invoked function expression, IIFE)
// 同时，该函数表达式是一个具名函数表达式（Named function expression, NFE）
// NFE 特性：
/*
 1. 作为函数名的标识符（在这里是 A ）只能从函数体内部访问，在函数外部访问不到 (IE9+)
 2. 绑定为函数名的标识符（在这里是A）不能再绑定为其它值，即该标识符绑定是不可更改的（immutable）
 */



(function A() {
  console.log(A); // undefined  var变量提升
  var A = 1;
  console.log(window.A); // undefined
  console.log(A); // 1
}());


function A() {
  console.log(A); // [Function A]
  A = 1;
  console.log(window.A); // 1
  console.log(A); // 1
}
A();
