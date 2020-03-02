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


async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
  /*
  等价于：
  async2().then(() => {
    console.log('async1 end');
  })
  */
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function () {
  console.log('setTimeout0')
});

setTimeout(function () {
  console.log('setTimeout3')
}, 3);

setImmediate(() => console.log('setImmediate'));

process.nextTick(() => console.log('nextTick'));

async1();

new Promise(function (resolve) {
  console.log('promise1');
  resolve();
  console.log('promise2');
}).then((function () {
  console.log('promise3')
}));

console.log('script end');
// script start
// async1 start
// async2
// promise1
// promise2
// script end
// nextTick
// promise3
// async1 end
// setTimeout0
// setImmediate
// setTimeout3
