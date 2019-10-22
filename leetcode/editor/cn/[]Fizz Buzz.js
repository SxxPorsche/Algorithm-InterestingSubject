//写一个程序，输出从 1 到 n 数字的字符串表示。
//
// 1. 如果 n 是3的倍数，输出“Fizz”；
//
// 2. 如果 n 是5的倍数，输出“Buzz”；
//
// 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
//
// 示例：
//
// n = 15,
//
//返回:
//[
//    "1",
//    "2",
//    "Fizz",
//    "4",
//    "Buzz",
//    "Fizz",
//    "7",
//    "8",
//    "Fizz",
//    "Buzz",
//    "11",
//    "Fizz",
//    "13",
//    "14",
//    "FizzBuzz"
//]
//
//



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  /*
  solution 1:
  遍历，判断能否被整除
  （当规则多的时候不好用）
  */

  /* solution 2: 字符串链接法 */
  const result = [];
  for (let i = 1; i <= n; i += 1) {
    let res = '';
    if (i % 3 === 0) {
      res += 'Fizz';
    }
    if (i % 5 === 0) {
      res += 'Buzz'
    }
    result.push(res || i.toString())
  }
  console.log(result);
  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
fizzBuzz(15);
