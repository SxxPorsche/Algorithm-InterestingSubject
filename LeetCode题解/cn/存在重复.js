//给定一个整数数组，判断是否存在重复元素。
//
// 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
//
// 示例 1:
//
// 输入: [1,2,3,1]
//输出: true
//
// 示例 2:
//
// 输入: [1,2,3,4]
//输出: false
//
// 示例 3:
//
// 输入: [1,1,1,3,3,4,3,2,4,2]
//输出: true
//

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    /*const map = new Map();
    for (let i = 0; i < nums.length; i += 1) {
      if (map.has(nums[i])) {
        return true;
      } else {
        map.set(nums[i], i);
      }
    }
    return false;*/

    /*
    info
			解答成功:
			执行耗时:152 ms,击败了45.97% 的JavaScript用户
			内存消耗:41 MB,击败了41.21% 的JavaScript用户
     */

    // 利用set不允许有重复键值的特性

     return new Set(nums).size < nums.length;

     /*
     info
			解答成功:
			执行耗时:96 ms,击败了90.33% 的JavaScript用户
			内存消耗:39.4 MB,击败了58.36% 的JavaScript用户
      */
};
