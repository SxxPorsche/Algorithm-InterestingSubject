// 'use strict'; 严格模式下，不能将全局对象用于默认绑定，this会绑定到undefined
var num = 1;
var myObject = {
  num: 2,
  add: function() {
    // console.log(1, this);  // myObject
    this.num = 3; // myObject.num = 3;
    (function() { // 匿名函数调用执行默认绑定
      // console.log(2, this); // window
      console.log(this.num); // window.num: 1
      this.num = 4; // global.num = 4;
    })();
    console.log(this.num); // myObject.num: 3
  },
  sub: function() {
    console.log(this.num);
  }
};
myObject.add(); // 1, 3
console.log(myObject.num); // 3
console.log(num); // window.num: 4
var sub = myObject.sub;
sub(); // window.num: 4
