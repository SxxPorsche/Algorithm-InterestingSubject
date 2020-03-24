// 一个旋转的有序数组，求最小的值，比如12345 => 34512，最小值1。剑指offer原题，思路就是二分
function min(array) {
  let left = 0, right = array.length - 1;
  if (array[left] < array[right]) return array[left];
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] > array[left]) {
      left = mid + 1;
    } else if (array[mid] < array[right]) {
      right = mid;
    } else {
      left ++;
    }
  }
  return array[left];
}

console.log(min([3,4,5,1,2]));
