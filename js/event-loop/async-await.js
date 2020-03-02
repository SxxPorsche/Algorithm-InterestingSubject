console.log('script start');

async function async1() {
  await async2(); // 此时跳出async函数，等到所有任务 & 微任务执行完后才恢复，所以promise产生的微任务在之前执行
  console.log('async1 end');
}
async function async2() {
  console.log('async2 end');
}
async1();

setTimeout(function() {
  console.log('setTimeout');
}, 0);

new Promise(resolve => {
  console.log('Promise');
  resolve()
})
.then(function() {
  console.log('promise1');
})
.then(function() {
  console.log('promise2');
});

console.log('script end');
// script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout
