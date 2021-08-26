//给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
//
// 示例 1：
//
// 输入: "babad"
//输出: "bab"
//注意: "aba" 也是一个有效答案。
//
//
// 示例 2：
//
// 输入: "cbbd"
//输出: "bb"
//
// Related Topics 字符串 动态规划




//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  /*
  动态规划：
  P[i][j] = s[i, j] 是回文串？ = P[i + 1][j - 1] && s[i] === s[j]
  * */
    const n = s.length;
    if (n < 2) {
      return s;
    }
    let res = s[0];
    const dp = [];
    for (let i = 0; i < n; i++) {
      dp.push(new Array(n).fill(true));
    }
    for(let j = 1; j < n; j++) {
      for(let i = 0; i < j; i++) {
        // 边界条件是：表达式 [i + 1, j - 1] 不构成区间，即长度严格小于 2，即 (j - 1) - (i + 1) + 1 < 2 ，
        // 整理得 j - i < 3
        dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1]);
        if (dp[i][j]) {
          if (j - i + 1> res.length) {
            res = s.substring(i, j + 1);
          }
        }
      }
    }
    // 优化过后算法
    // const dp = [];
    // for (let i = n - 1; i >= 0; i-- ) {
    //   for(let j = n - 1; j >= i; j--) {
    //     dp[j] = s[i] === s[j] && (j - i < 3 || dp[j - 1]);
    //     if (dp[j] && j - i + 1 > res.length) {
    //       res = s.substring(i, j + 1);
    //     }
    //   }
    // }
  return res;
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(longestPalindrome("bb"));
