//给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三
//元组。
//
// 注意：答案中不可以包含重复的三元组。
//
// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
//
//满足要求的三元组集合为：
//[
//  [-1, 0, 1],
//  [-1, -1, 2]
//]
//
// Related Topics 数组 双指针

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = [];
  // 暴力解法
  // const len = nums.length;
  // for (let i = 0; i < len - 2; i ++) {
  //   for (let j = i + 1; j < len - 1; j ++) {
  //     for (let k = j + 1; k < len; k++) {
  //       if (nums[i] + nums[j] + nums[k] === 0) {
  //          // 想办法去除重复解
  //         res.push([nums[i], nums[j], nums[k]]);
  //       }
  //     }
  //   }
  // }

  /*
    特判，对于数组长度 n，如果数组为 null 或者数组长度小于 3，返回 []。
    对数组进行排序。
    遍历排序后数组：
    若 nums[i]>0：因为已经排序好，所以后面不可能有三个数加和等于 0，直接返回结果。
    如果nums[i - 1] === nums[i]说明于上次结果一致，跳过
    对于重复元素：跳过，避免出现重复解
    令左指针 L=i+1，右指针 R=n-1，当 L<R 时，执行循环：
    当 nums[i]+nums[L]+nums[R]==0,执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将 L,R 移到下一位置，寻找新的解
    若和大于 0，说明 nums[R] 太大，R 左移
    若和小于 0，说明 nums[L] 太小，L 右移
   */
  if (!nums || nums.length < 3) return res;
  const sorted = nums.sort((a, b) => a - b);
  const len = sorted.length;
  for (let i = 0; i < len; i ++) {
    if (sorted[i] > 0) return res;
    if (sorted[i] === sorted[i - 1]) continue;
    let l = i + 1, r = len - 1;
    while (l < r) {
      if (sorted[i] + sorted[l] + sorted[r] === 0) {
        while(sorted[l + 1] === sorted[l]) {
          l++;
        }
        while(sorted[r - 1] === sorted[r]) {
          r--;
        }
        res.push([sorted[i], sorted[l], sorted[r]]);
        l++;
        r--;
      } else if (sorted[i] + sorted[l] + sorted[r] > 0) {
        r--;
      } else {
        l++;
      }
    }
  }
  return res;
};
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));
//leetcode submit region end(Prohibit modification and deletion)
