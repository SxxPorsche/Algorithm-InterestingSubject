function wait() {
  return new Promise(resolve => {
    setTimeout(resolve, 10);
  });
}

async function main1() {
  console.time();
  const x = wait();
  const y = wait();
  const z = wait();
  await x;
  await y;
  await z;
  console.timeEnd(); // 10ms, Promise实例化时立即执行setTimeout，10ms后三个Promise为resolve状态
}

async function main2() {
  console.time();
  await wait();
  await wait();
  await wait();
  console.timeEnd();  // 30ms
}

main1();
main2();
