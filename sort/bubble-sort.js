// 冒泡排序
function BubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }

  // 可稍微优化一下的点：正向反向同时冒泡
}

var arr = [1, 4, 3, 5, 2];
BubbleSort(arr);
console.log(arr);

// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
