/*
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 变体：调整奇偶位置，改nums[i] === 0  =>  nums[i] % 2 === 0
var moveZeroes = function(nums) {
  let i = 0, pos = 0;
  while(i < nums.length) {
    if (nums[i] === 0) {
      while(nums[i] === 0) {
        i += 1;
      }
      if (i >= nums.length) break;
      let tmp = nums[i];
      nums[i] = nums[pos];
      nums[pos] = tmp;
      pos += 1;
    } else {
      i += 1;
      pos += 1;
    }
    console.log(pos, i, nums);
  }
  console.log(nums);
};

moveZeroes([0,1,0,3,12]);
