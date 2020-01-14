// 堆排序
/*
大顶堆：arr[i] >= arr[2i+1] && arr[i] >= arr[2i+2]

小顶堆：arr[i] <= arr[2i+1] && arr[i] <= arr[2i+2]
 */
function HeapSort(array) {
  creatHeap(array);
  // 交换第一个和最后一个元素，然后重新调整大顶堆
  for (let i = array.length - 1; i > 0; i--) {
    [array[i], array[0]] = [array[0], array[i]];
    adjust(array, 0, i);
    console.log(array);
  }
  return array;
}
// 构建大顶堆，从最后一个非叶子节点开始，进行调整操作
function creatHeap(array) {
  const len = array.length;
  const start = Math.floor(len / 2) - 1; // 最后一个非叶子节点下标
  // 从最后一个非叶子节点开始从下往上调整
  for (let i = start; i >= 0; i--) {
    adjust(array, i, len);
  }
}

function adjust(array, target, len) {
  // 遍历叶子节点
  // 从i结点的左子结点开始，也就是2i+1处开始
  for (let i = 2 * target + 1; i < len; i = 2 * i + 1) {
    // 如果左子结点小于右子结点，i指向右子结点
    if (i + 1 < len && array[i + 1] > array[i]) {
      i = i + 1;
    }
    // 如果子节点大于父节点，将子节点值赋给父节点
    if (array[i] > array[target]) {
      [array[i], array[target]] = [array[target], array[i]];
      target = i;
    } else {
      break;
    }
  }
}

var arr = [5,3,7,6,8,1,2,5,9,4];
// console.log(QuickSort(arr));
console.time('堆排序耗时');
console.log(HeapSort(arr));
console.timeEnd('堆排序耗时');
// 时间复杂度：O(n log(n))
// 空间复杂度：O(1)
