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

/*求中位数，其实就是求第 k 小数的一种特殊情况
*一般的情况 A[1] ，A[2] ，A[3]，A[k/2] ... ，B[1]，B[2]，B[3]，B[k/2] ...
* 如果 A[k/2]<B[k/2] ，那么A[1]，A[2]，A[3]，A[k/2]都不可能是第 k 小的数字。
* A 数组中比 A[k/2] 小的数有 k/2-1 个，B 数组中，B[k/2] 比 A[k/2] 小，
* 假设 B[k/2] 前边的数字都比 A[k/2] 小，也只有 k/2-1 个，
* 所以比 A[k/2] 小的数字最多有 k/1-1+k/2-1=k-2个，所以 A[k/2] 最多是第 k-1 小的数。
* 而比 A[k/2] 小的数更不可能是第 k 小的数了，所以可以把它们排除。
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;

    const total = len1 + len2;

    if (total % 2 === 0) {
        const k1 = total / 2;
        const k2 = k1 + 1;
        // console.log(getKthNumber(nums1, 0, len1 - 1, nums2, 0, len2 - 1, k1), getKthNumber(nums1, 0, len1 - 1, nums2, 0, len2 - 1, k2));
        return (
          getKthNumber(nums1, 0, len1 - 1, nums2, 0, len2 - 1, k1) +
          getKthNumber(nums1, 0, len1 - 1, nums2, 0, len2 - 1, k2)
        ) / 2;
    } else {
        const k = (total + 1) / 2;
        return getKthNumber(nums1, 0, len1 - 1, nums2, 0, len2 - 1, k);
    }
};

function getKthNumber(nums1, start1, end1, nums2, start2, end2, k) {
    const len1 = end1 - start1 + 1;
    const len2 = end2 - start2 + 1;

    if (len1 > len2) return getKthNumber(nums2, start2, end2, nums1, start1, end1, k);
    if (len1 === 0) return nums2[start2 + k - 1];

    if (k === 1) return Math.min(nums1[start1], nums2[start2]);


    const i = start1 + Math.min(len1, Math.floor(k / 2)) - 1;
    const j = start2 + Math.min(len2, Math.floor(k / 2)) - 1;

    if (nums1[i] > nums2[j]) {
        return getKthNumber(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1));
    }
    else {
        return getKthNumber(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1));
    }
}

console.log(findMedianSortedArrays([1,2], [-1, 3]));
