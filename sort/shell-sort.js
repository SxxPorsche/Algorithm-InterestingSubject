// 希尔排序
function ShellSort(array) {
  const len = array.length;
  let gap = Math.floor(len / 2);
  while (gap > 0) {
    // 根据gap对数组进行分组
    for (let i = 0; i < gap; i ++) {
      // 分组内部使用直接插入排序
      for (let j = i + gap; j < len; j += gap) {
        let flag = array[j];
        for(let k = j - gap; k >= 0; k -= gap)
          if (array[k] > flag) {
            array[k + gap] = array[k];
            array[k] = flag;
          }
      }
    }
    gap = Math.floor(gap / 2);
  }
}

var arr = [592, 401, 874, 141, 348, 72, 911, 887, 820, 283];
ShellSort(arr);
console.log(arr);

// 时间复杂度：O(n log(n))
// 空间复杂度：O(1)
