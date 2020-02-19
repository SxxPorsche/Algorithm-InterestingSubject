const map = new Map();
function Fibonacci(n) {
  if (n === 0 || n === 1 || n === 2) return n;
  if (map.has(n)) return map.get(n);
  const res = Fibonacci(n - 1) + Fibonacci(n - 2);
  map.set(n, res);
  return res;
}

// console.log(Fibonacci(4));

/**
 * @return {number}
 */
function Fibonacci2(n) {
  if (n === 0) return 0;
  let sum = 1;
  let one = 1;
  for(let i = 2;i <= n;i++){
    sum = sum + one;
    one = sum - one;
  }
  return sum;
}

console.log(Fibonacci2(3));
