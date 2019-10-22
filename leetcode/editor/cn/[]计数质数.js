//统计所有小于非负整数 n 的质数的数量。
//
// 示例:
//
// 输入: 10
//输出: 4
//解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
//
// Related Topics 哈希表 数学



//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  /*
  solution 1:
  判断能不能被别的数整除，只需要判断比n小的质数即可，因为合数都是可以分解质因数的；
  */

  /*
  solution 2:
  所有的大于3的质数都是6的倍数两侧！
  即：6*n+1或者6*n-1，这个结论能将需要处理的数字从所有奇数再减少到所有6n两侧的奇数。

  if n % 6 !== 1 && n % 6 !== 5
    return false;
  */

  /*
  solutions 3:
  构建一个长度为n的状态组，每找到一个质数，
  就将其的n倍的位置的标记全部标记为合数（置True），而合数不进行处理

  const tags = new Array(n).fill(false);
  const result = [];
  for (let i = 2; i < n; i += 1) {
    if(!tags[i - 1]) {
      result.push(i);
    }
    for (let prime of result) {
      if(prime * i > n) break;
      tags[prime * i - 1] = true;
    }
  }
  console.log(result.length);
  */

  /*
  solution 4:
  solution 3的优化版
  由于因子的对称性，其中的 for 循环只需要遍历 [2,sqrt(n)]

  标记倍数时，比如 i = 4 时算法会标记 4 × 2 = 8，4 × 3 = 12，
  但 i = 6 时算法会标记 6 × 2 = 12，6 × 3 = 18, 6 × 5 = 30，可以看到有标记冗余
  */
  let result = 0;
  const primes = new Array(n).fill(true);
  for (let i = 2; i * i < n; i += 1) {
    if(primes[i - 1]) {
      for(let j = i * i; j < n; j += i) { // 从 i * i 开始，小于 i 的数的倍数已被标记
        primes[j - 1] = false;
      }
    }
  }
  for(let i = 2; i < n; i += 1) {
    if(primes[i - 1]) {
      result += 1;
    }
  }

  return result;
};
//leetcode submit region end(Prohibit modification and deletion)
countPrimes(100);

