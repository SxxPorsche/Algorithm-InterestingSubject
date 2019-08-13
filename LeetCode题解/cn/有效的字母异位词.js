//给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
//
// 示例 1:
//
// 输入: s = "anagram", t = "nagaram"
//输出: true
//
//
// 示例 2:
//
// 输入: s = "rat", t = "car"
//输出: false
//
// 说明:
//你可以假设字符串只包含小写字母。
//
// 进阶:
//如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
//

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const [long ,short] = s.length > t.length ? [s, t] : [t, s];

  const map = new Map();
  for(let i = 0; i < short.length; i ++) {
    const count = map.get(short[i]);
    map.set(short[i], count ? count + 1 : 1);
  }
  for(let i = 0; i < long.length; i ++) {
    const count = map.get(long[i]);
    if(count) {
      map.set(long[i], count - 1);
    } else {
      return false;
    }
  }
  return true;
  /*
  96ms, 91.03%
   */
};

console.log(isAnagram('ab', 'a'));
