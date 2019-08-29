true + false; // 1 + 0 = 1;
// + 运算符对 string 外类型 会触发 number 类型转换

12 / '6'; // 2
// 算数运算符会把 string 转为 number 类型

"number" + 15 + 3;  // "number153"
15 + 3 + "number";  // "18number"
// + 运算符对 string 类型运算会统一转换为 string

[1] > null;  // true
// 比较运算符 执行 number 类型隐式转换
/*
==> '1' > 0
==> 1 > 0
==> true
 */

"foo" + + "bar";  // "fooNaN"
/*
==> "foo" + (+"bar")
==> "foo" + NaN
==> "fooNaN"
 */

'true' == true; // false
/*
==> NaN == 1
==> false
 */

null == '';  // false
// null 不等于任何值除了 null 和 undefined

['x'] == 'x';  // true
[] + null + 1;  // 'null1'
/*
==> '' + null + 1
==> 'null' + 1
==> 'null1'
 */
/*
== 运算符对数组类型执行 number 转换，先调用对象的 valueOf() 方法，
结果是数组本身，不是原始类型值，所以执行对象的 toString() 方法
 */

0 || "0" && {};  // {};


[1,2,3] == [1,2,3]; // false
// 当运算符两边类型相同时，不会执行类型转换，两个数组的内存地址不一样，所以返回 false

{} + [] + {} + [1];  // '0[object Object]1'
/*
==> +[] + {} + [1]
==> 0 + {} + [1]
==> 0 + '[object Object]' + '1'
==> '0[object Object]1'
 */

! + [] + [] + ![]; // 'truefalse'
/*
==> !(+[]) + [] + (![])
==> !0 + [] + false
==> true + [] + false
==> true + '' + false
==> 'truefalse'
 */
// 一元运算符优先执行

new Date(0) - 0;  // 0
/*
==> 0 - 0
==> 0
 */
/*
'-' 运算符执行 number 类型隐式转换对于 Date 型的值
Date.valueOf() 返回到毫秒的时间戳。
 */

new Date(0) + 0;
/*
==> 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)' + 0
==> 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)0'
 */
// '+' 运算符触发默认转换，因此使用 toString() 方法，而不是 valueOf()

String('11') == new String('11'); // true 隐式转换
String('11') === new String('11'); // false

// new String('11').valueOf() === '11' === String('11');

String(Symbol('symbol'));  // 'Symbol(symbol)'
Number(Symbol('my symbol'))    // TypeError is thrown
'' + Symbol('symbol');  // TypeError is thrown
// Symbol 类型转 String 类型是比较严格的，它只能被显式的转换(除Number外）
