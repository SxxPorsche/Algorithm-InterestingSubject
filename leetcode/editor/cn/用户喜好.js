process.stdin.setEncoding('ascii');

const input = [];
process.stdin.on('data', (data) => {
  console.log(typeof data, {
    a: data,
  });
  if(data === '') {
    process.stdin.emit('end');
  }
  input.push(data);

});
