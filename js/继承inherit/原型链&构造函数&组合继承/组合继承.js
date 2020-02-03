function Super(name) {
  this.name = name;
  this.tag = 'father';
}

Super.prototype.getName = function () {
  console.log(this.name);
};

function Sub(name, age) {
  Super.call(this, name);
  this.age = age;
}

Sub.prototype = new Super();
Sub.prototype.constructor = Sub;
Sub.prototype.getAge = function(){
  console.log(this.age);
};

const instance1 = new Sub('a', 12);
const instance2 = new Sub('b', 17);
// 缺点：
//
// 第一次调用SuperType()：给SubType.prototype写入两个属性name，color。
// 第二次调用SuperType()：给instance1写入两个属性name，color。
//
// 实例对象instance1上的两个属性就屏蔽了其原型对象SubType.prototype的两个同名属性。
// 所以，组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法。
