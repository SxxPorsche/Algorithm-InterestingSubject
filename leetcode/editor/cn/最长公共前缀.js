//编写一个函数来查找字符串数组中的最长公共前缀。
//
// 如果不存在公共前缀，返回空字符串 ""。
//
// 示例 1:
//
// 输入: ["flower","flow","flight"]
//输出: "fl"
//
//
// 示例 2:
//
// 输入: ["dog","racecar","car"]
//输出: ""
//解释: 输入不存在公共前缀。
//
//
// 说明:
//
// 所有输入只包含小写字母 a-z 。
//

/**
 * @param {string[]} strs
 * @return {string}
 */

/*
递归 水平扫描
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  if (strs.length === 2) {
    return compareStr(strs[0], strs[1]);
  }
  return compareStr(longestCommonPrefix(strs.slice(0, -1)), strs[strs.length - 1]);
};

function compareStr(str1, str2) {
  let i = 0;
  let res = '';
  while(1) {
    if(str1[i] && str2[i] && str1[i] === str2[i]) {
      res += str1[i];
      i += 1;
    } else {
      return res;
    }
  }
}
*/

// 二分查找
var longestCommonPrefix = function(strs) {
  if (!strs.length || !strs) return '';

  let res = '';

  function binarySearch(str) {
    // console.log(str);

    if (!str) return;

    const mid = Math.ceil(str.length / 2) - 1;

    const left = str.slice(0, mid + 1);
    const right = str.slice(mid + 1);

    const reg = new RegExp(`^${res}${left}`);

    for(let i = 1; i < strs.length; i += 1) {
      if (!reg.test(strs[i])) {
        str.length !== 1 && binarySearch(left, strs);
        return;
      }
    }
    res += left;
    binarySearch(right, strs);
  }

  const flag = strs[0];
  binarySearch(flag);

  return res;
};

// trie 树

longestCommonPrefix(["flower","flow","flight"]);
