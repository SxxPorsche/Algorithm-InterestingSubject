console.log('begin')
new Promise(() => {
  console.log('promise 0');
  setTimeout(() => {
    console.log('setTimeout 0');
    Promise.resolve().then(() => {
      console.log('promise 1');
      setTimeout(() => {
        console.log('setTimeout 1')
      });
      Promise.resolve().then(() => {
        console.log('promise 3')
      });
    }).then(() => {
      console.log('promise 2')
    });
  }, 0)
});
console.log('end');

// begin, promise 0, end setTimeout 0, promise 1, promise 3, promise2, setTimeout 1
