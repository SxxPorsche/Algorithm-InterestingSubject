## Nodejs Cluster 多进程架构
多进程 + 单线程 模式
注意：开启多进程不是为了解决高并发，主要是解决了单进程模式下 Node.js CPU 利用率不足的情况，充分利用多核 CPU 的性能

## node 进程 & 线程
Node 中最核心的是 v8 引擎，在 Node 启动后，会创建 v8 的实例，这个实例是多线程的。

* 主线程：编译、执行代码。
* 编译/优化线程：在主线程执行的时候，可以优化代码。
* 分析器线程：记录分析代码运行时间，为 Crankshaft 优化代码执行提供依据。
* 垃圾回收的几个线程

所以大家常说的 Node 是单线程的指的是 JavaScript 的执行是单线程的(开发者编写的代码运行在单线程环境中)

### cluster模块调用fork方法来创建子进程
```
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	console.log(`Master 进程 ${process.pid} 正在运行`);
	
  for (let i = 0; i < numCPUs; i++) { // 衍生工作进程。
    cluster.fork();
  }
	
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} 已退出`);
  });
} else {
  http.createServer((req, res) => res.end(`你好世界 ${process.pid}`)).listen(8000);
  console.log(`Worker 进程 ${process.pid} 已启动`);
}
```

### cluster多个子进程监听同个端口
端口只会被主进程内部启动的一个TCP服务器监听，
主进程和子进程在建立 IPC 通信之后，通过发送 Socket 到子进程实现端口共享，
在之后 Master 接收到新的客户端链接之后，通过负载均衡技术再转发到各 Worker 进程

核心就是父进程（即 master 进程）负责监听端口，接收到新的请求后将其分发给下面的 worker 进程
