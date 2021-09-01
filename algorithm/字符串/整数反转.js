//给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
//
// 示例 1:
//
// 输入: 123
//输出: 321
//
//
// 示例 2:
//
// 输入: -123
//输出: -321
//
//
// 示例 3:
//
// 输入: 120
//输出: 21
//
//
// 注意:
//
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231, 231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
//

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max = Math.pow(2, 31)  - 1;
    const min = -Math.pow(2, 31);

    let res = parseInt(x.toString().split('').reverse().join(''), 10);
    res = x > 0 ? res : -res;

    if (res < min || res > max) {
      return 0;
    }

    return res;
    /*
    执行耗时:96 ms,击败了95.98% 的JavaScript用户
			内存消耗:35.6 MB,击败了71.44% 的JavaScript用户
     */
};

reverse(-120);
