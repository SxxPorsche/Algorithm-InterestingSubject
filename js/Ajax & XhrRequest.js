function request({
  url,
  method = "post",
  data,
  headers,
  requestList,
}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    Object.keys(headers).forEach(key =>
      xhr.setRequestHeader(key, headers[key])
    );
    xhr.send(data);
    /*
    xhr.onreadystatechange = function(e) {
    	if(xhr.readyState == 4){
        resolve({
          data: e.target.response,
        });
      }
      0: 未初始化，此时XMLHTTPRequest对象已经创建，还没有调用open()；
      1: 已经创建请求，调用open函数，但是还没有调用send发送；
      2: 请求已经发送，正在处理中，此时已经接受了response的报文头部；
      3: 请求处理中，此时已经接收了部分报文体，response中的部分数据已经可以使用；
      4: 响应完成，可以使用报文的全部信息。
    }
    */
    xhr.onload = (e) => {
      resolve({
        data: e.target.response,
      });
    }
  });
}

module.exports = request;
