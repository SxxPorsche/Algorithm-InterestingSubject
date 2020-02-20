function printMatrix(matrix) {
  const res = [];
  let arr = matrix;
  while(arr.length) {
    const lenX = arr[0].length;
    for (let i = 0; i < lenX; i++) {
      res.push(arr[0][i]);
    }
    arr.shift();
    if (arr.length) {
      arr = rotate(arr);
    }
  }
  return res;
}

function rotate(matrix) {
  const res = [];
  const lenY = matrix.length;
  const lenX = matrix[0].length;
  for(let i = 0; i < lenY; i++){
    for (let j = lenX - 1; j >= 0; j--) {
      const k = lenX - 1 - j;
      if (res[k]) {
        res[k].push(matrix[i][j]);
      } else {
        res[k] = [matrix[i][j]];
      }
    }
  }
  return res;
}

const matrix = [
  [1],
  [5],
  [3],
  [9]
];



console.log(printMatrix(matrix));

function printMatrix2(matrix) {
  const res = [];
  const lenX = matrix.length;
  const lenY = matrix[0].length;
  const set = new Set();
  let x = 0, y = 0, dir = 0;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0 , -1, 0];

  while(x >= 0 && x < lenX && y >= 0 && y < lenY && !set.has(`${x},${y}`)) {
    res.push(matrix[x][y]);
    set.add(`${x},${y}`);
    while (
      x + dx[dir] >= 0 && x + dx[dir] < lenX &&
      y + dy[dir] >= 0 && y + dy[dir] < lenY &&
      !set.has(`${x + dx[dir]},${y + dy[dir]}`)
    ) {
      x += dx[dir];
      y += dy[dir];
      res.push(matrix[x][y]);
      set.add(`${x},${y}`);
    }
    // 走不动了换方向
    dir = (dir + 1) % 4;
    x += dx[dir];
    y += dy[dir];
  }

  return res;
}

const matrix2 = [
  [1, 2, 3, 4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];



console.log(printMatrix2(matrix2));
