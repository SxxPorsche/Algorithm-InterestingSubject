/**
 * @return {number}
 */
function FindGreatestSumOfSubArray(array) {
  let sum = 0, max = -Infinity;
  for (let i = 0; i <array.length; i++) {
    if (sum < 0) {
      sum = array[i];
    } else {
      sum += array[i];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
console.log(FindGreatestSumOfSubArray([-2,-8,-1,-5,-9]));
