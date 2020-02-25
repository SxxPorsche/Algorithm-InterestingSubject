// 归并排序
function MergeSort(arr) {
  const length = arr.length;
  const mid = Math.floor(length / 2);
  if (length < 2) return arr;
  const left = MergeSort(arr.slice(0, mid));
  const right = MergeSort(arr.slice(mid, length));
  return Merge(left, right);
}

function Merge(arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2.length;
  const res = [];
  let i = 0, j = 0;
  while(i < len1 || j < len2) {
    if(arr1[i] !== undefined) {
      if(arr2[j] !== undefined && arr1[i] <= arr2[j] || arr2[j] === undefined) {
        res.push(arr1[i]);
        i++;
      }
    }
    if (arr2[j] !== undefined) {
      if(arr1[i] !== undefined && arr1[i] > arr2[j] || arr1[i] === undefined) {
        res.push(arr2[j]);
        j++;
      }
    }
  }
  return res;
}

// 2.下标排序写法
function MergeSort2(arr) {
  const length = arr.length;
  let left = 0, right = length - 1;
  const res = [];
  Merge2(arr, left, right, res);
  return arr;
}

function Merge2(array, left, right, temp) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    Merge2(array, left, mid, temp);
    Merge2(array, mid + 1, right, temp);
    MergeOpt(array, left, right, temp);
  }
  return array;
}

function MergeOpt(array, left, right, temp) {
  const mid = Math.floor((left + right) / 2);
  let leftIndex = left;
  let rightIndex = mid + 1;
  let tempIndex = 0;
  while (leftIndex <= mid && rightIndex <= right) {
    if (array[leftIndex] < array[rightIndex]) {
      temp[tempIndex++] = array[leftIndex++]
    } else {
      temp[tempIndex++] = array[rightIndex++]
    }
  }
  while (leftIndex <= mid) {
    temp[tempIndex++] = array[leftIndex++]
  }
  while (rightIndex <= right) {
    temp[tempIndex++] = array[rightIndex++]
  }
  tempIndex = 0;
  for (let i = left; i <= right; i++) {
    array[i] = temp[tempIndex++];
  }
}


var arr = [7, 8, 4, 5, 6, 9, 2];
console.log(MergeSort(arr));
console.log(MergeSort2(arr));
// 时间复杂度：O(n log(n))
// 空间复杂度：O(n)
