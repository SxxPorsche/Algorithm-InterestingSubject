var name = 'window';

function Person (name) {
  this.name = name;
  this.show1 = function () {
    console.log(this.name)
  };
  this.show2 = () => console.log(this.name);
  this.show3 = function () {
    return function () {
      console.log(this.name);
    }
  };
  this.show4 = function () {
    return () => console.log(this.name)
  }
}

var personA = new Person('personA');
var personB = new Person('personB');

personA.show1(); // pa 隐式绑定，调用者是 personA
personA.show1.call(personB); // pb 显式绑定，调用者是 personB

personA.show2(); // pa 首先personA是new绑定，产生了新的构造函数作用域，然后是箭头函数绑定，this指向外层作用域，即personA函数作用域
personA.show2.call(personB); // pa 同上

personA.show3()(); // window 默认绑定，调用者是window
personA.show3().call(personB); // pb 显式绑定，调用者是personB
personA.show3.call(personB)(); // window 默认绑定，调用者是window

personA.show4()(); // pa 箭头函数绑定，this指向外层作用域，即personA函数作用域
personA.show4().call(personB); // pa 箭头函数绑定，call并没有改变外层作用域，this指向外层作用域，即personA函数作用域
personA.show4.call(personB)(); // pb
// 1、首先是var func1 = personA.show4.call(personB)，这是显式绑定，调用者是personB，show4函数指向的是personB。
// 2、然后是func1()，箭头函数绑定，this指向外层作用域，即personB函数作用域
