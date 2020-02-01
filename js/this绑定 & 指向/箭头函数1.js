// 箭头函数根据作用域链往上层查找，直到找到一个绑定了this的函数作用域，并指向调用该普通函数的对象
var name = 'window';

var person1 = {
  name: 'person1',
  show1: function () {
    console.log(this.name)
  },
  show2: () => console.log(this.name),
  show3: function () {
    return function () {
      console.log(this.name)
    }
  },
  show4: function () {
    return () => console.log(this.name)
  }
};

var person2 = { name: 'person2' };

person1.show1(); // p1 隐式绑定，this指向调用者 person1
person1.show1.call(person2); // p2 显式绑定，this指向 person2

person1.show2(); // p1×  window√ 箭头函数绑定，this指向外层作用域，即全局作用域
person1.show2.call(person2); // p1×  window√ 箭头函数绑定，this指向外层作用域，即全局作用域

person1.show3()(); // window 默认绑定，这是一个高阶函数，调用者是window， 类似于`var func = person1.show3()` 执行`func()`
person1.show3().call(person2); // p2 显式绑定，this指向 person2
person1.show3.call(person2)(); // window 默认绑定，调用者是window

person1.show4()(); // p1 箭头函数绑定，this指向外层作用域，即person1函数作用域
person1.show4().call(person2); // p1 箭头函数绑定，this指向外层作用域，即person1函数作用域
person1.show4.call(person2)(); // p2
// 1、首先是var func1 = person1.show4.call(person2)，这是显式绑定，调用者是person2，show4函数指向的是person2。
// 2、然后是func1()，箭头函数绑定，this指向外层作用域，即person2函数作用域
