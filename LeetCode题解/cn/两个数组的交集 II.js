//给定两个数组，编写一个函数来计算它们的交集。
//
// 示例 1:
//
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
//输出: [2,2]
//
//
// 示例 2:
//
// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//输出: [4,9]
//
// 说明：
//
//
// 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
// 我们可以不考虑输出结果的顺序。
//
//
// 进阶:
//
//
// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
//
//

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const res = [];
    /*
    const [long, short] = nums1.length > nums2.length ? [nums1, nums2] : [nums2, nums1];
    short.forEach((num) => {
        const index = long.findIndex(val => val === num);
        if(index !== -1) {
            res.push(num);
            long[index] = undefined;
        }
    });
    info
			解答成功:
			执行耗时:140 ms,击败了16.03% 的JavaScript用户
			内存消耗:36 MB,击败了12.23% 的JavaScript用户
     */

    /* method2
    nums1.sort();
    nums2.sort();
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if(nums1[i] === nums2[j]) {
            res.push(nums1[i]);
            i += 1;
            j += 1;
        } else if (nums1[i] < nums2[j]) {
            i += 1;
        } else {
            j += 1;
        }
    }*/

    const map = new Map();
    for (let i = 0; i < nums1.length; i += 1) {
        const count = map.has(nums1[i]) ? map.get(nums1[i]) + 1 : 1;
        map.set(nums1[i], count);
    }
    for (let i = 0; i< nums2.length; i += 1) {
        if (map.has(nums2[i]) && map.get(nums2[i]) > 0) {
            const count = map.get(nums2[i]);
            res.push(nums2[i]);
            map.set(nums2[i], count - 1);
        }
    }
    /*
    info
			解答成功:
			执行耗时:92 ms,已经战胜 78.38 % 的 javascript 提交记录
			内存消耗:36.4 MB,击败了7.71% 的JavaScript用户
     */
    console.log(res);
    return res;
};

intersect([1,2,2,1], [2,2]);
