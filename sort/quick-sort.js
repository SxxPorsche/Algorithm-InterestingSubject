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
  console.log(arr, left, right);
  if(left < right) {
    let l = left, r = right;
    while(l < r) {
      if(arr[l] > pivot) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        r--;
      } else {
        l++;
      }
    }
    if (arr[l] < pivot) {
      [arr[l], arr[left]] = [arr[left], arr[l]];
    } else {
      [arr[l - 1], arr[left]] = [arr[left], arr[l - 1]];
      l = l - 1;
    }
    QuickSort2(arr, left, l - 1);
    QuickSort2(arr, l + 1, right);
  }
  return arr;
}

var arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log(QuickSort(arr));
console.log(QuickSort2(arr, 0 ,arr.length - 1));
// 时间复杂度：O(n log(n))
// 空间复杂度：O(log(n))
