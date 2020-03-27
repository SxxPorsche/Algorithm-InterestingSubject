/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (nums == null || nums.length === 0) {
    return -1;
  }

  let l = 0, r = nums.length - 1;
  while (l < r) {
    let mid = Math.floor(l + (r - l) / 2); // 防止溢出

    if (nums[mid] > nums[mid + 1]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
};
/*
首先从数组 nums 中找到中间的元素 mid。
若该元素恰好位于降序序列或者一个局部下降坡度中（通过将 nums[i] 与右侧比较判断)，则说明峰值会在本元素的左边。
于是，我们将搜索空间缩小为 mid 的左边(包括其本身)，并在左侧子数组上重复上述过程。

若该元素恰好位于升序序列或者一个局部上升坡度中（通过将 nums[i] 与右侧比较判断)，则说明峰值会在本元素的右边。
于是，我们将搜索空间缩小为 mid 的右边，并在右侧子数组上重复上述过程。

就这样，我们不断地缩小搜索空间，直到搜索空间中只有一个元素，该元素即为峰值元素。
*/

console.log(findPeakElement([1,2,3,1]));
