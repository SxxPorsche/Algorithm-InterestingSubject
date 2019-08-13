//给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
//
// 示例:
//
// 给定 nums = [2, 7, 11, 15], target = 9
//
//因为 nums[0] + nums[1] = 2 + 7 = 9
//所以返回 [0, 1]
//
//

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    const map = new Map();
    nums.forEach((num, index) => {
      map.set(num, index);
    });
    for(let i = 0; i < nums.length; i += 1) {
      const rest = target - nums[i];
      if (map.has(rest) && map.get(rest) !== i) {
        result = [i, map.get(rest)];
        break;
      }
    }

    return result;
};

/*
info
			解答成功:
			执行耗时:88 ms,击败了91.06% 的JavaScript用户
			内存消耗:35.6 MB,击败了14.86% 的JavaScript用户
*/
