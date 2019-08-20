// 宏任务 task:
// js, setTimeout, setInterval, setImmediate, I/O, UI rendering， XHR/fetch

// 微任务 microTask
// process.nextTIck, Promise.then(), MutationObserver

// 微任务在每个宏任务开始前执行
// 当宏任务执行完，会在渲染前，将执行期间所产生的所有微任务都执行完。
// 宏任务1 => 执行宏任务1产生的微任务 => 渲染 => 宏任务2 => 执行宏任务2产生的微任务 => 渲染 => 。。。
/*
1. 执行一个宏任务（栈中没有就从事件队列中获取）
2. 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
3. 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
4. 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
5 .渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）
 */

//宏任务都是放在一个事件队列中，由事件触发线程维护，依次进入到执行栈中的
// 微任务不会进入到事件队列中，而是进入到微任务队列中，微任务队列由JS引擎线程维护（在JS线程下无缝执行）

console.log('1');

setTimeout(function() {
  console.log('2');
  new Promise(function(resolve) {
    console.log('3');
    resolve();
  }).then(function() {
    console.log('4')
  })
}, 0);

new Promise(function(resolve) { //promise声明代码立即执行
  console.log('5');
  resolve()
}).then(function() {
  console.log('6');
  setTimeout(function() {
    console.log('7')
  })
});

console.log('8');


// 1 5 8 6 2 3 4 7
