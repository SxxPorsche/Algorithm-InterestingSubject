预请求是跨域资源共享（CORS）标准规范要求
对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求）
浏览器必须首先使用OPTIONS方法发起一个预检请求（preflight request）
从而获知服务端是否允许该跨域请求


需要发送预检请求的复杂请求：
    1. 使用了PUT,DELETE,CONNECT,OPTIONS等HTTP方法
    2. 人为设置了对CORS安全的首部字段集合之外的其他首部字段
    3. Content-type的值不属于下列之一：
        application/x-www-form-urlencoded
        multipart/form-data
        text/plain


```
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/post-here/';
var body = '<?xml version="1.0"?><person><name>Arun</name></person>';
    
function callOtherDomain(){
  if(invocation)
    {
      invocation.open('POST', url, true);
      invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
      invocation.setRequestHeader('Content-Type', 'application/xml');
      invocation.onreadystatechange = handler;
      invocation.send(body); 
    }
}
```

发送的预检请求会携带下面两个首部字段：
```
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

预检请求的响应为：
```
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```
