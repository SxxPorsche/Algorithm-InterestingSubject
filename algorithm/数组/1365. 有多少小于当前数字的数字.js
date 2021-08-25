/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const res = new Array(nums.length).fill(0);
  const tmp = [];
  for (let i = 0; i < nums.length; i++) {
    tmp.push([nums[i], i]);
  }
  tmp.sort((a, b) => a[0] - b[0]);
  let pre = -1;
  for (let i = 0; i < nums.length; i++){
    if (i === 0) {
      res[tmp[i][1]] = pre + 1
    } else if (tmp[i][0] === tmp[i-1][0]) {
      res[tmp[i][1]] = pre + 1;
    } else {
      pre = i - 1;
      res[tmp[i][1]] = pre + 1;
    }
  }
  return res;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
