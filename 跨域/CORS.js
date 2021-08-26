// index.html
let xhr = new XMLHttpRequest();
document.cookie = 'name=xiamen'; // cookie不能跨域
xhr.withCredentials = true; // 前端设置是否带cookie
xhr.open('PUT', 'http://localhost:4000/getData', true);
xhr.setRequestHeader('name', 'xiamen');
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
			console.log(xhr.response);
			//得到响应头，后台需设置Access-Control-Expose-Headers
			console.log(xhr.getResponseHeader('name'))
		}
	}
};
xhr.send();

//server1.js
let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.listen(3000);

//server2.js
let express = require('express');
let app = express();
let whitList = ['http://localhost:3000']; //设置白名单
app.use(function (req, res, next) {
	let origin = req.headers.origin;
	if (whitList.includes(origin)) {
		// 设置哪个源可以访问我
		res.setHeader('Access-Control-Allow-Origin', origin);
		// 允许携带哪个头访问我
		res.setHeader('Access-Control-Allow-Headers', 'name');
		// 允许哪个方法访问我
		res.setHeader('Access-Control-Allow-Methods', 'PUT');
		// 允许携带cookie
		res.setHeader('Access-Control-Allow-Credentials', true);
		// 预检的存活时间
		res.setHeader('Access-Control-Max-Age', 6);
		// 允许返回的头
		res.setHeader('Access-Control-Expose-Headers', 'name');
		if (req.method === 'OPTIONS') {
			res.end() // OPTIONS请求不做任何处理
		}
	}
	next()
});

app.put('/getData', function (req, res) {
	console.log(req.headers);
	res.setHeader('name', 'jw'); //返回一个响应头，后台需设置
	res.end('我不爱你')
});

app.get('/getData', function (req, res) {
	console.log(req.headers);
	res.end('我不爱你')
});

app.use(express.static(__dirname));
app.listen(4000);


