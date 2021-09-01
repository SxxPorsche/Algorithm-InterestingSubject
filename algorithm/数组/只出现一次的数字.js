//给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
//
// 说明：
//
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
//
// 示例 1:
//
// 输入: [2,2,1]
//输出: 1
//
//
// 示例 2:
//
// 输入: [4,1,2,1,2]
//输出: 4
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  /*
  const set = new Set();
  for (let i = 0; i< nums.length;i += 1) {
    if(set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }
  return set.values().next().value;

  info
    解答成功:
    执行耗时:92 ms,击败了84.27% 的JavaScript用户
    内存消耗:38.5 MB,击败了5.88% 的JavaScript用户
 */

  // method 2
  // 2(a + b + c) - (2a + 2b + c) = c;
  /*
  const set = new Set(nums);
  const sum1 = Array.from(set).reduce((total, value) => total + value, 0);
  const sum2 = nums.reduce((total, value) => total + value, 0);
  console.log(2 * sum1 - sum2);
  return 2 * sum1 - sum2;
  info
			解答成功:
			执行耗时:88 ms,击败了88.29% 的JavaScript用户
			内存消耗:38.2 MB,击败了7.72% 的JavaScript用户
   */


  // method 3
  /*
  方法 4：位操作
    概念

    如果我们对 0 和二进制位做 XOR 运算，得到的仍然是这个二进制位
    a⊕0 = a
    如果我们对相同的二进制位做 XOR 运算，返回的结果是 0
    a⊕a = 0
    XOR 满足交换律和结合律
    a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
    所以我们只需要将所有的数进行 XOR 操作，得到那个唯一的数字。
   */
  let a = 0;
  nums.forEach((num) => {
    a = a ^ num;
  });
  console.log(a);
  return a;
  /*
    info
			解答成功:
			执行耗时:80 ms,击败了94.26% 的JavaScript用户
			内存消耗:??? MB,击败了???% 的JavaScript用户
   */
};

singleNumber([2, 2, 1]);
