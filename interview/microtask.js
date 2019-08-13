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

new Promise(function(resolve) {
  console.log('5');
  resolve()
}).then(function() {
  console.log('6');
  setTimeout(function() {
    console.log('7')
  })
});

console.log('8');
