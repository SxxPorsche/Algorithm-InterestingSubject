// a.html
// <iframe src="http://localhost:4000/b.html" frameborder="0" id="frame" onload="load()">
// </iframe> //等它加载完触发一个事件

function load() {
  let frame = document.getElementById('frame');
  frame.contentWindow.postMessage('我爱你', 'http://localhost:4000'); //发送数据
  window.onmessage = function(e) { //接受返回数据
    console.log(e.data) //我不爱你
  }
}

// b.html
window.onmessage = function(e) {
  console.log(e.data); //我爱你
  e.source.postMessage('我不爱你', e.origin)
};
