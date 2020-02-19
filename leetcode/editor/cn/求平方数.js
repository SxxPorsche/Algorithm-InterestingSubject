// 求 base 的 exponent 次方

// 简单快速幂运算
function Power(base, exponent) {
  const e = Math.abs(exponent);

  function power(base, e) {
    if (e === 0) return 1;
    if (e === 1) return base;
    const res = power(base, Math.floor(e/ 2));
    return e % 2 ? res  * res * base : res * res;
  }

  return exponent >= 0 ? power(base, e) : 1 / power(base, e);
}

// 位运算
/**
 * @return {number}
 */
function Power2(base, exponent) {
  let e = Math.abs(exponent);
  if (e === 0) return 1;
  if (e === 1) return base;
  let res = 1;
  while (e) {
    if(e & 1) res = res * base;
    base *= base;
    e = e >> 1;
  }
  return exponent >= 0 ? res : 1 / res;
}
