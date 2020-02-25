// 快速排序
// 1.高空间复杂度
function QuickSort(arr) {
  if(arr.length <  2) return arr;
  let pivot = arr[0];
  const left = [], right = [];
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [
    ...QuickSort(left),
    pivot,
    ...QuickSort(right),
  ];
}

// 2. 基于下标
function QuickSort2(arr, left, right) {
  let pivot = arr[left];
  if(left < right) {
    let l = left, r = right;
    while(l < r) {
      console.log(arr, l, r);
      while(l < r && arr[r] >= pivot) {
        r--;
      }
      arr[l] = arr[r]; // 放进pivot的位置，右边位置空出
      while(l < r && arr[l] <= pivot) {
        l++;
      }
      arr[r] = arr[l]; // 放进右边r的位置，左边位置l空出
    }
    arr[l] = pivot; // 将pivot放进最后空出的位置l
    QuickSort2(arr, left, l - 1);
    QuickSort2(arr, l + 1, right);
  }
  return arr;
}

var arr = [5,3,7,6,8,1,2,5,9,4];
// console.log(QuickSort(arr));
console.time('快速排序耗时');
console.log(QuickSort2(arr, 0 ,arr.length - 1));
console.timeEnd('快速排序耗时');
// 时间复杂度：O(n log(n))
// 空间复杂度：O(log(n))
