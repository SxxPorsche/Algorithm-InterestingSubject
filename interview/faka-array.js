var obj = {
  '2': 3,
  '3': 4,
  'length': 2,
  'splice': Array.prototype.splice,
  'push': Array.prototype.push
};

obj.push(1);
obj.push(2);
console.log(obj);

/*
Object(4) [empty × 2, 1, 2, splice: ƒ, push: ƒ]
{
  '2': 1,
  '3': 2,
  length: 4,
  splice: [Function: splice],
  push: [Function: push],
}
*/

/*
push方法将值追加到数组中。

push 方法有意具有通用性。该方法和 call() 或 apply() 一起使用时，可应用在类似数组的对象上。
push 方法根据 length 属性来决定从哪里开始插入给定的值。
如果 length 不能被转成一个数值，则插入的元素索引为 0，包括 length 不存在时。
当 length 不存在时，将会创建它。

调用push方法的时候会在调用对象的key=length的地方做一个赋值，不管前面key有没有值

唯一的原生类数组（array-like）对象是 Strings，尽管如此，它们并不适用该方法，因为字符串是不可改变的。

对象如果有push和splice，输出会转换为数组
 */
