/**
 给定一个含有 n 个正整数的数组和一个正整数 target 。
 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

 输入：target = 7, nums = [2,3,1,2,4,3]
 输出：2
 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 **/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let min = Infinity;
  let total = 0;
  for(let i = 0, j = 0; j < nums.length; j++){
    // 扩大窗口
    total += nums[j];
    while(i <= j && total >= target){
      //更新最小值
      min = Math.min(min, j - i + 1);
      // 缩小窗口
      total -= nums[i++];
    }
  }
  return min === Infinity ? 0 : min;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
