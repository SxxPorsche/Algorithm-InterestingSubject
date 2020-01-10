// 插入排序
// 将最新一位插入到前面的有序序列中
function InsertSort(array) {
  const len = array.length;
  for (let i = 1; i < len; i++) {
    let flag = array[i];
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > flag) {
        array[j + 1] = array[j];
        array[j] = flag;
      }
    }
  }
}

var arr = [5,4,3,2,1];
InsertSort(arr);
console.log(arr);

// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
