//给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
//
// 示例 1:
//
// 输入: [1,2,3,4,5,6,7] 和 k = 3
//输出: [5,6,7,1,2,3,4]
//解释:
//向右旋转 1 步: [7,1,2,3,4,5,6]
//向右旋转 2 步: [6,7,1,2,3,4,5]
//向右旋转 3 步: [5,6,7,1,2,3,4]
//
//
// 示例 2:
//
// 输入: [-1,-100,3,99] 和 k = 2
//输出: [3,99,-1,-100]
//解释:
//向右旋转 1 步: [99,-1,-100,3]
//向右旋转 2 步: [3,99,-1,-100]
//
// 说明:
//
//
// 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 要求使用空间复杂度为 O(1) 的 原地 算法。
//
//

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // method 1

  /*
  for (let i = 0; i < k; i += 1) {
    nums.unshift(...nums.splice(-1, 1));
  }
  info 1
        解答成功:
        执行耗时:148 ms,击败了48.08% 的JavaScript用户
        内存消耗:36.4 MB,击败了5.03% 的JavaScript用户
  */

  // method 2

  const index = (k - 1) % nums.length;
  nums.reverse();
  reverse(nums, 0, index);
  reverse(nums, index + 1, nums.length - 1);

  /*
  info
			解答成功:
			执行耗时:96 ms,击败了91.56% 的JavaScript用户
			内存消耗:35.4 MB,击败了29.40% 的JavaScript用户
   */

  console.log(nums);
};

function reverse(nums, start, end) {
  let tmp = 0;
  while (start < end) {
    tmp = nums[start];
    nums[start] = nums[end];
    nums[end] = tmp;
    start += 1;
    end -= 1;
  }
}

rotate([1, 2], 2);
