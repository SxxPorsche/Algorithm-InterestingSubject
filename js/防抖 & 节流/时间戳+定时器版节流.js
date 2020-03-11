const throttle = function (func, wait, options = { first: true, last: true }) {
  let previous = 0, timeout = null, res;

  const throttled = function (...props) {
    let now = new Date().valueOf();

    if (!previous && options.first === false) { // 初始不执行
      previous = now;
    }

    let remain = wait - (now - previous);

    if (remain <= 0) { // 执行间隔时间大于 wait，触发函数
      if (timeout) {
        clearTimeout(timeout);
        // clearTimeout(timeout) 并不会把 timeout 设为 null
        // 手动设置，便于后续判断
        timeout = null;
      }

      previous = now;
      res = func.apply(this, props);
    } else {
      if(!timeout && options.last !== false) {
        timeout = setTimeout(() => {
          // 当设置第一次不触发时
          // 每次触发回调函数后设置 previous 为 0
          // 不然为当前时间
          previous = options.first === false ? 0 : now;

          // 防止内存泄漏，置为 null 便于后面根据 !timeout 设置新的 timeout
          // clearTimeout(timeout);
          timeout = null;

          // 执行函数
          res = func.apply(this, props);
        }, remain);
      }
    }
    return res;
  };

  // 手动取消
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };

  // 执行 throttle 返回 throttled 函数
  return throttled;
};
