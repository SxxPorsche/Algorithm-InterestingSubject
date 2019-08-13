//给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
//
// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
//
// 你可以假设 nums1 和 nums2 不会同时为空。
//
// 示例 1:
//
// nums1 = [1, 3]
//nums2 = [2]
//
//则中位数是 2.0
//
//
// 示例 2:
//
// nums1 = [1, 2]
//nums2 = [3, 4]
//
//则中位数是 (2 + 3)/2 = 2.5
//
//

function findMedian(nums, length) {
  return length % 2 === 0 ?
    (nums[length / 2 - 1] + nums[length / 2]) / 2 :
    nums[Math.floor(length / 2)];
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;

    const medIndex = Math.floor((len1 + len2) / 2);

    const med1 = len1 ? findMedian(nums1, len1) : 0;
    const med2 = len2 ? findMedian(nums2, len2) : 0;
    const nums = (len1 ? 1 : 0) + (len2 ? 1 : 0);


    console.log(med1, med2);
    return (med1 + med2) / nums;
};

findMedianSortedArrays([3], [-2, -1]);
