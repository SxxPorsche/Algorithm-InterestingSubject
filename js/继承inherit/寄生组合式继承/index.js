function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.getName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);
  // OtherSuperClass.call(this); 继承其他多个类
  this.age = age;
}

const prototype = Object.create(SuperType.prototype); // 创建对象，创建父类原型的一个副本;
// Object.assign(prototype, OtherSuperClass.prototype); 将其他多个类的prototype浅拷贝到prototype中
prototype.constructor = SubType;                    // 增强对象，弥补因重写原型而失去的默认的constructor 属性
SubType.prototype = prototype;                      // 指定对象，将新创建的对象赋值给子类的原型

SubType.prototype.getAge = function(){
  console.log(this.age);
};

const instance1 = new SubType("xyc", 23);
const instance2 = new SubType("lxy", 12);

instance1.colors.push("2"); // ["red", "blue", "green", "2"]
instance2.colors.push("3"); // ["red", "blue", "green", "3"]

console.log(instance1.colors);
instance1.getName();
instance1.getAge();
console.log(instance2.colors);
instance2.getName();
instance2.getAge();
