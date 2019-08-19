//给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
//
// 说明:
//
//
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
//
//
// 示例:
//
// 输入:
//nums1 = [1,2,3,0,0,0], m = 3
//nums2 = [2,5,6],       n = 3
//
//输出: [1,2,2,3,5,6]
//

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  /*
  const tmp = [];
  let i = 0;
  let j = 0;
  while(i < m && j < n) {
    if(nums1[i] < nums2[j]) {
      tmp.push(nums1[i]);
      i += 1;
    } else if (nums1[i] >= nums2[j]) {
      tmp.push(nums2[j]);
      j += 1;
    }
  }
  if(i >= m) {
    while(j < n) {
      tmp.push(nums2[j]);
      j += 1;
    }
  }
  if(j >= n) {
    while(i < m) {
      tmp.push(nums1[i]);
      i += 1;
    }
  }
  for (let k = 0; k < m + n; k += 1) {
    nums1[k] = tmp[k];
  }
  */
  // 双指针后入法
  let i = m - 1;
  let j = n - 1;
  let tail = m + n - 1;
  while(i >= 0 && j >= 0) {
    if(nums1[i] < nums2[j]) {
      nums1[tail] = nums2[j];
      j -= 1;
      tail -= 1;
    } else {
      nums1[tail] = nums1[i];
      i -= 1;
      tail -= 1;
    }
  }
  if(i < 0) {
    while(j >= 0) {
      nums1[tail] = nums2[j];
      j -= 1;
      tail -= 1;
    }
  }

};

const nums1 = [1];
const nums2 = [];

merge(nums1, 1, nums2, 0);

console.log(nums1)
