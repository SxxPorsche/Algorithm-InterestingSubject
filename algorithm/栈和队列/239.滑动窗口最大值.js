/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (!nums.length || !k) return [];
  let window = [], res = [];
  for(let i = 0; i < nums.length; i++) {
    // 先把滑动窗口之外的踢出
    if(window[0] !== undefined && window[0] <= i - k) window.shift();
    // 保证队首是最大的
    while(nums[window[window.length - 1]] <= nums[i]) window.pop();
    window.push(i);
    if(i >= k - 1) res.push(nums[window[0]]);
  }
  return res;
};
