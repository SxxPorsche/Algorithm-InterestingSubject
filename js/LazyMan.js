/*
实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
 */
function LazyMan(name) {
  return new _Lazy_Man(name);
}

class _Lazy_Man {
  constructor(name) {
    this.queue = [() => setTimeout(() => {
      console.log('Hi This is ' + name);
      this.next();
    }, 0)];
    setTimeout(() => this.next(), 0);
  }

  next() {
    const task = this.queue.shift();
    if (task) {
      task();
    }
  }

  sleepFirst(time) {
    this.queue.unshift(() => setTimeout(() => {
      console.log('Wake up after ' + time);
      this.next();
    }, time * 1000));
    return this;
  }

  sleep(time) {
    this.queue.push(() => setTimeout(() => {
      console.log('Wake up after ' + time);
      this.next();
    }, time * 1000));
    return this;
  }

  eat(type) {
    this.queue.push(() => setTimeout(() => {
      console.log('Eat ' + type);
      this.next();
    }, 0));
    return this;
  }
}

// LazyMan('Hank');
LazyMan('Hank').sleep(1).eat('dinner');
// LazyMan('Hank').eat('dinner').eat('supper');
// LazyMan('Hank').sleepFirst(5).eat('supper');
