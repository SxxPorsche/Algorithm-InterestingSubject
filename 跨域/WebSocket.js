// socket.html
let socket = new WebSocket('ws://localhost:3000');
socket.onopen = function () {
  socket.send('我爱你');//向服务器发送数据
};
socket.onmessage = function (e) {
  console.log(e.data);//接收服务器返回的数据
};

// server.js
let express = require('express');
let app = express();
let WebSocket = require('ws');//记得安装ws
let wss = new WebSocket.Server({ port:3000 });
wss.on('connection',function(ws) {
  ws.on('message', function (data) {
    console.log(data);
    ws.send('我不爱你')
  });
});
