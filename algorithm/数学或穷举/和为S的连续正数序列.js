function FindContinuousSequence(sum) {
  if (sum <= 0) return [];
  const res = [];
  let left = 1, right = 2;
  let total = left + right;
  while (right < sum) {
    if (total < sum) {
      right += 1;
      total += right;
    } else if (total > sum) {
      total -= left;
      left ++;
    } else {
      let list = [];
      for (let i = left; i <= right; i++) {
        list.push(i);
      }
      res.push(list);
      right += 1;
      total += right;
    }
  }

  return res;
}

console.log(FindContinuousSequence(100));