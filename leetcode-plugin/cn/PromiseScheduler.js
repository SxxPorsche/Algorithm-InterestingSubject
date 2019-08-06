//JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。
// 完善代码中Scheduler类，使得以下程序能正确输出
class Scheduler {
  constructor() {
    this.queue = [];
    this.tasksCount = 2;
  }

  add(promiseCreator) {
    if(this.tasksCount > 0) {
      this.tasksCount -= 1;
      return new Promise((resolve) => {
        resolve(
          promiseCreator()
        );
      });
    } else {
      this.queue.push(promiseCreator);
    }
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
