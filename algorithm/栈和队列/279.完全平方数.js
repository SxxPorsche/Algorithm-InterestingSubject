var numSquares = function(n) {
  const queue = [];
  const map = new Set();
  queue.push([n, 0]);
  map.add(n);

  /*
    for (let i = Math.floor(Math.sqrt(num)); i >= 1; i--) {
      let nxtNum = num - i * i;
      if (nxtNum === 0) {
        return step + 1;
      }
      return numSquares(nxtNum) + 1;
    }
  */
  while (queue.length) {
    let [num, step] = queue.shift();
    for (let i = Math.floor(Math.sqrt(num)); i >= 1; i--) {
      let nxtNum = num - i * i;
      if (nxtNum === 0) {
        return step + 1;
      }
      if (!map.has(nxtNum)) {
        queue.push([nxtNum, step + 1]);
        map.add(nxtNum);
      }
    }
  }
};
