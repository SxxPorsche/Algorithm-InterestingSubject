/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const length = nums.length;
  const res = [];
  function dfs(first) {
    if (first === length) {
      res.push(nums.slice());
      return;
    }
    for (let i = first; i < length; i++) {
      [nums[first], nums[i]] = [nums[i], nums[first]];
      dfs(first + 1);
      [nums[first], nums[i]] = [nums[i], nums[first]];
    }
  }
  dfs(0);
  console.log(res);
  return res;
};

permute([1,2,3]);
