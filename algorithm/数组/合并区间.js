function mergeRanges(ranges) {
  ranges.sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (let i = 0; i < ranges.length; i++) {
    if (!merged.length || merged[merged.length - 1][1] < ranges[i][0]) {
      merged.push(ranges[i]);
    } else {
      const range = merged[merged.length - 1];
      range[1] = Math.max(range[1], ranges[i][1]);
    }
  }
  return merged;
}

mergeRanges([
  [1,3],
  [4,6],
  [2,5],
  [7, 10]
]);
