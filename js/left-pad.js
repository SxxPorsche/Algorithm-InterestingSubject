// 1. 数组拼接法
var _join = Array.prototype.join;

function leftpad1(str, len, ch) {
  if (!ch && ch !== 0) ch = ' ';
  var padLen = len - str.length + 1;
  return _join.call({
    length:padLen
  }, ch) + str;
}


// 2. 二分法
function leftpad2(str, len, ch) {
  if (!ch && ch !== 0) ch = ' ';
  var padLen = len - str.length, total = '';
  while (padLen) {
    // 如果len是基数，total上就加一个ch
    if (padLen % 2 === 1) {
      total += ch;
    }
    // 位操作版： (padLen & 1) && (total += ch);
    // 每次ch都变成chch
    ch += ch;
    //长度减半
    len = Math.floor(padLen / 2); // 位操作版： len >> 1;
  }
  return total + str
}
