//JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。
// 完善代码中Scheduler类，使得以下程序能正确输出
class Scheduler {
  constructor() {
    this.queue = [];
    this.tasksCount = 0;
  }

  add(promiseCreator) {
    if(this.tasksCount >= 2) {
      return new Promise(resolve => {
        this.queue.push(resolve);
      }).then(() => {
        return this.runTask(promiseCreator);
      });
    } else {
      return this.runTask(promiseCreator);
    }
  }
  /* async await 简洁写法
      async add(promiseCreator) {
        this.count >= 2 ? await new Promise(resolve => this.awaitArr.push(resolve)) : '';
        this.count++;
        const res = await promiseCreator();
        this.count--;
        this.awaitArr.length && this.awaitArr.shift()();
        return res;
    }
   */

  runTask(promiseCreator) {
    this.tasksCount++;
    return promiseCreator().then(() => {
      this.tasksCount--;
      this.queue.length && this.queue.shift()();
    });
  }
}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
});

const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time))
    .then(() => console.log(order))
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// output: 2 3 1 4
