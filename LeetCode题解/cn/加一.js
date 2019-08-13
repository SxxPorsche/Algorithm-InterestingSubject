//给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
//
// 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
//
// 你可以假设除了整数 0 之外，这个整数不会以零开头。
//
// 示例 1:
//
// 输入: [1,2,3]
//输出: [1,2,4]
//解释: 输入数组表示数字 123。
//
//
// 示例 2:
//
// 输入: [4,3,2,1]
//输出: [4,3,2,2]
//解释: 输入数组表示数字 4321。
//
//

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 0;
  for(let i = digits.length - 1; i >= 0; i -= 1) {
    if (i === digits.length - 1) {
      digits[i] += 1;
    } else {
      digits[i] += carry;
    }
    carry = Math.floor(digits[i] / 10);
    digits[i] = digits[i] % 10;
  }
  carry !== 0 && digits.unshift(carry);
  console.log(digits);
  return digits;
  /*
    执行耗时:92 ms,击败了49.45% 的JavaScript用户
    内存消耗:34.3 MB,击败了5.14% 的JavaScript用户
   */
};

plusOne([1,2,3]);
