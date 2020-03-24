/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  let res = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i ++) {
    let k = i + 2;
    for (let j = i + 1; j < nums.length - 1 && nums[i] !== 0; j++) {
      while (k < nums.length && nums[i] + nums[j] > nums[k]) {
        k++;
      }
      res += k - j - 1; // k 和 j 之间的所有数都符合条件
    }
  }
  return res;
};

console.log(triangleNumber([0,1,0,1]));
