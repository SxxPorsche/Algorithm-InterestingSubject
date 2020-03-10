// a.test.com
// <iframe src="http://b.test.com:3000/b.html" frameborder="0" onload="load()" id="frame"></iframe>
document.domain = 'test.com';
function load() {
  console.log(frame.contentWindow.a);
}

// b.html
document.domain = 'test.com';
var a = 100;
