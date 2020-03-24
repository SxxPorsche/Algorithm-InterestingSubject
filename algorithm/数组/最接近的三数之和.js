//给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和
//。假定每组输入只存在唯一答案。
//
// 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
//
//与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
//
// Related Topics 数组 双指针




//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  function calCloset(total) {
    return Math.abs(total - target);
  }
  let res = Infinity;
  const sorted = nums.sort((a, b) => a - b);
  const len = sorted.length;
  for (let i = 0; i < len; i++ ) {
    if (sorted[i] === sorted[i - 1]) continue;
    let l = i + 1, r = len - 1;
    while(l < r) {
      console.log(sorted[i], sorted[l], sorted[r], res)
      const total = sorted[i] + sorted[l] + sorted[r];
      if (calCloset(total) < calCloset(res)){
        res = total;
        if (res === target) return target;
      }
      if(total < target) {
        l++
      } else {
        r--;
      }
    }
  }
  return res;
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(threeSumClosest([13,2,0,-14,-20,19,8,-5,-13,-3,20,15,20,5,13,14,-17,-7,12,-6,0,20,-19,-1,-15,-2,8,-2,-9,13,0,-3,-18,-9,-9,-19,17,-14,-19,-4,-16,2,0,9,5,-7,-4,20,18,9,0,12,-1,10,-17,-11,16,-13,-14,-3,0,2,-18,2,8,20,-15,3,-13,-12,-2,-19,11,11,-10,1,1,-10,-2,12,0,17,-19,-7,8,-19,-17,5,-5,-10,8,0,-12,4,19,2,0,12,14,-9,15,7,0,-16,-5,16,-12,0,2,-16,14,18,12,13,5,0,5,6], -59));
