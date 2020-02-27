在React中，如果是由React引发的事件处理（比如通过onClick引发的事件处理），
调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.state。

所谓“除此之外”，指的是
    1. 绕过React通过addEventListener直接添加的事件处理函数
    2. 通过setTimeout/setInterval产生的异步调用

**原因：**
在React的setState函数实现中，会根据一个变量 isBatchingUpdates 判断是直接更新 this.state 还是放到 更新队列中，
而isBatchingUpdates默认是false，也就表示setState会同步更新this.state;
但是，有一个函数batchedUpdates，这个函数会把isBatchingUpdates修改为true;
而当React在调用事件处理函数之前就会调用这个batchedUpdates，
造成的后果，就是由React控制的事件处理过程setState不会同步更新this.state。

所以setState的异步指： 多个state会合成到一起进行批量更新

详细请看 深入 [setState 机制](https://github.com/sisterAn/blog/issues/26])
