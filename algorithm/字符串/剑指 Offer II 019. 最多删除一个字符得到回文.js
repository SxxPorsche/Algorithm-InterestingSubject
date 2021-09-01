/*
给定一个非空字符串 s，请判断如果 最多 从字符串中删除一个字符能否得到一个回文字符串
示例 1:

输入: s = "aba"
输出: true
示例 2:

输入: s = "abca"
输出: true
解释: 可以删除 "c" 字符 或者 "b" 字符
示例 3:

输入: s = "abc"
输出: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let deletePos = [-1, -1];
  let hasDeleted = 0;
  let i = 0, j = s.length -1;
  while(i <= j) {
    if(s[i] !== s[j]) {
      if (hasDeleted !== 2) {
        if (hasDeleted) {
          i = deletePos[0] + 1;
          j = deletePos[1];
          hasDeleted += 1;
        } else {
          deletePos = [i, j];
          j--;
          hasDeleted += 1;
        }
      } else {
        return false;
      }
    } else {
      i++;
      j--;
    }
  }
  return true;
};
