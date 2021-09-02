/*
*  笛卡尔乘积: fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ["an0", "an1", "am0", "am1", "bn0", "bn1", "bm0", "bm1"]
*/


function fn(arr) {
  return arr.reduce((result, cur, index, array) => {
    const tmp = [];
    result.forEach((a) => {
      cur.forEach((b) => {
        const str = '' + a + b;
        tmp.push(str);
      });
    });
    return tmp;
  });
}

console.log(fn([
  ['a', 'b'],
  ['n', 'm'],
  ['0', '1']
]));
