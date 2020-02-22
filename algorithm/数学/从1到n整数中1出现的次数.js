/**
 * @return {number}
 */
function NumberOf1Between1AndN_Solution(n) {
  if (n < 1) return 0;
  let count = 0;
  for (let i = 1; i <= n; i *= 10) {
    let cur =  Math.floor(n / (i * 10)); // 当前位前面的数
    count += cur * i;
    const remain = Math.floor(n / i) % 10; // 末位余数
    if (remain === 1) count += (n % i) + 1;
    else if (remain > 1) count += i;
  }
  return count;
}
// 题解：https://blog.csdn.net/yi_afly/article/details/52012593

console.log(NumberOf1Between1AndN_Solution(534));
