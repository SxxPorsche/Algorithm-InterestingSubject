// 选择排序
function SelectSort(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
}

var arr = [5,4,3,2,1];
SelectSort(arr);
console.log(arr);

// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
