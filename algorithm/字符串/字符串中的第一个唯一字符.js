//给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
//
// 案例:
//
//
//s = "leetcode"
//返回 0.
//
//s = "loveleetcode",
//返回 2.
//
//
//
//
// 注意事项：您可以假定该字符串只包含小写字母。
//

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  /*for(let i = 0; i < s.length; i += 1) {
    const firstIndex = s.indexOf(s[i]);
    const lastIndex = s.lastIndexOf(s[i]);
    if (firstIndex === lastIndex) {
      return i;
    }
  }
  return -1;
  168ms, 42.30%
  */
  const map = new Map();
  for(let i = 0; i < s.length; i += 1) {
    map.set(s[i], map.get(s[i]) ? map.get(s[i]) + 1 : 1);
  }
  for(let i = 0; i < s.length; i += 1) {
    if(map.get(s[i]) === 1) {
      return i;
    }
  }
  return - 1;
  /*
  152ms, 54.20%
   */
};

console.log(firstUniqChar('loveleetcode'));
