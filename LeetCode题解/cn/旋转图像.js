//给定一个 n × n 的二维矩阵表示一个图像。
//
// 将图像顺时针旋转 90 度。
//
// 说明：
//
// 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
//
// 示例 1:
//
// 给定 matrix =
//[
//  [1,2,3],
//  [4,5,6],
//  [7,8,9]
//],
//
//原地旋转输入矩阵，使其变为:
//[
//  [7,4,1],
//  [8,5,2],
//  [9,6,3]
//]
//
//
// 示例 2:
//
// 给定 matrix =
//[
//  [ 5, 1, 9,11],
//  [ 2, 4, 8,10],
//  [13, 3, 6, 7],
//  [15,14,12,16]
//],
//
//原地旋转输入矩阵，使其变为:
//[
//  [15,13, 2, 5],
//  [14, 3, 4, 1],
//  [12, 6, 8, 9],
//  [16, 7,10,11]
//]
//
//

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix[0].length;
  for(let level = 0; level < n / 2 + n % 2; level++) {
    for (let i = level, j = level; i < n - level - 1 && j < n - level - 1; i++, j++) {

      let a = matrix[level][j],
        b = matrix[i][n - level - 1],
        c = matrix[n - level - 1][n - j - 1],
        d = matrix[n - i - 1][level];

      matrix[level][j] = d;
      matrix[i][n - level - 1] = a;
      matrix[n - level - 1][n - j - 1] = b;
      matrix[n - i - 1][level] = c;
    }
  }
  /*
  执行耗时:76 ms,击败了88.69% 的JavaScript用户
  内存消耗:33.8 MB,击败了32.14% 的JavaScript用户
   */
};

rotate([
  [1,2,3,4],
  [4,5,6,13],
  [7,8,9,12],
  [78,14,11,10]
]);
