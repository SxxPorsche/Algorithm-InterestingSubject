class Promise {
  constructor(creator) {
    this.status = 'pending';
    this.resolveVal = undefined;
    this.rejectReason = undefined;
    this.resolvedCallback = [];
    this.rejectCallback = [];
    creator(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    if (this.status === 'pending') {
      this.status = 'fulfilled';
      this.resolveVal = value;
      this.resolvedCallback.forEach(fn => fn());
    }
  };

  reject(reason) {
    if (this.status === 'pending') {
      this.status = 'rejected';
      this.rejectReason = reason;
      this.rejectCallback.forEach(fn => fn());
    }
  };

  then(onResolve, onReject) {
    if (this.status === 'fulfilled') {
      onResolve(this.resolveVal);
    } else if (this.status === 'rejected') {
      onReject(this.rejectReason);
    } else {
      return new Promise((resolve) => {
        this.resolvedCallback.push(() => {
          const result = onResolve(this.resolveVal);
          if (result instanceof Promise) {
            result.then(resolve);
          } else {
            resolve(result);
          }
        });
        this.rejectCallback.push(() => {
          onReject(this.rejectReason);
        });
      });
    }
  }
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123);
  }, 1000);
}).then(val => {
  console.log(val);
  return new Promise(resolve => {
    resolve(1234);
  });
}).then(val => {
  console.log(val);
});
