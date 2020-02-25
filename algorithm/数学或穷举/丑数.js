/**
 * @return {number}
 */
function GetUglyNumber_Solution(index) {
  if (index <= 0) return 0;
  const uglyList = [1];
  let p2 = 0, p3 = 0, p5 = 0;
  for(let i = 1; i < index; i++) {
    const nxtUgly = Math.min(uglyList[p2] * 2, uglyList[p3] * 3, uglyList[p5] * 5);
    uglyList.push(nxtUgly);
    if (nxtUgly % 2 === 0) p2 ++;
    if (nxtUgly % 3 === 0) p3 ++;
    if (nxtUgly % 5 === 0) p5 ++;
  }
  console.log(uglyList)
  return uglyList.pop();
}

console.log(GetUglyNumber_Solution(2));
