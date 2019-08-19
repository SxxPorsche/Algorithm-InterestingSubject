//给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
//
// 示例:
//
// 输入: [0,1,0,3,12]
//输出: [1,3,12,0,0]
//
// 说明:
//
//
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。
//
//

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  /*
  let i = 0, j = 1;
  while(i < nums.length && j < nums.length) {
    if(nums[i] === 0) {
      while(nums[j] === 0 && j < nums.length - 1) {
        j += 1;
      }
      nums[i] = nums[j];
      nums[j] = 0;
    }
    i += 1;
    j += 1;
  }
  执行耗时：92 ms，击败了84.46%的JavaScript用户
 */

  /*
    let zeroElementIndex = 0;
    for(let i = 0; i < nums.length; i += 1) {
      if(nums[i] !== 0) {
        nums[zeroElementIndex++] = nums[i];
      }
    }
    for(let j = zeroElementIndex; j < nums.length; j += 1) {
      nums[j] = 0;
    }
    console.log(nums);
    88ms, 91.04%
 */

  let zeroElementIndex = 0;
  for(let i = 0; i < nums.length; i += 1) {
    if(nums[i] !== 0) {
      let tmp = nums[zeroElementIndex];
      nums[zeroElementIndex++] = nums[i];
      nums[i] = tmp;
    }
  }
};

moveZeroes([4,2,4,0,0,3,0,5,1,0]);
