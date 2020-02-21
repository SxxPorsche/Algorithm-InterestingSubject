const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  if (line === '') {
    rl.close();
  }
  input.push(line);
}).on('close', () => {
  console.log(input);
  process.exit(0);
});
