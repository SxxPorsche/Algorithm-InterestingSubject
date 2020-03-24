/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const map = [];
  const tail = [];
  for (let num of nums) {
    map[num] = map[num] ? map[num] + 1 : 1;
    tail[num] = 0;
  }
  for (let num of nums) {
    console.log(map, tail);
    if (map[num] === 0) {
      continue;
    } else if (map[num] > 0 && tail[num - 1] > 0) {
      map[num] -= 1;
      tail[num - 1] -= 1;
      tail[num] += 1;
    } else if (map[num] > 0 && map[num + 1] > 0 && map[num + 2] > 0) {
      map[num] -= 1;
      map[num + 1] -= 1;
      map[num + 2] -= 1;
      tail[num + 2] += 1;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPossible( [1,2,3,4,4,5]));
// 因此，只有检查到某个数时，这个数未被消耗完，且既不能和前面组成连续子序列，也不能和后面组成连续子序列时，无法分割
