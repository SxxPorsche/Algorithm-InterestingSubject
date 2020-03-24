// 在有并发数 max 限制的前提下, 最高效地发送完所有请求, 当所有请求返回后执行 callback, 发请求的函数用 fetch 即可

function fetch(url) {
  return new Promise(resolve => {
    resolve(url);
  });
}

function sendRequest(urls, max, callback) {
  const queue = [];
  let count = 0;
  const add = (url) => {
    if (count < max) {
      run(url);
    } else {
      queue.push(() => {
        run(url);
      })
    }
  };
  const run = (url) => {
    count ++;
    fetch(url)
      .then(() => {
        count --;
        queue.length && queue.shift()();
      });
  };
}
