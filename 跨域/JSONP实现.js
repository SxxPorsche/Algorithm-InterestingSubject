// 实现：
function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    window[callback] = function(data) {
      resolve(data);
      document.body.removeChild(script)
    };
    params = { ...params, callback } ;// wd=b&callback=show
    let arrs = [];
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        arrs.push(`${key}=${params[key]}`);
      }
    }
    script.src = `${url}?${arrs.join('&')}`;
    document.body.appendChild(script)
  })
}
jsonp({
  url: 'http://localhost:3000/say', // 跨域地址
  params: { wd: 'Iloveyou' },
  callback: 'show'
}).then(data => {
  console.log(data)
});


// jQuery ajax 实现：
$.ajax({
  url: 'http://crossdomain.com/jsonServerResponse',
  dataType: 'jsonp',
  type: 'get',//可以省略
  jsonpCallback: 'show',// ->自定义传递给服务器的函数名，而不是使用jQuery自动生成的，可省略
  jsonp: 'callback',// ->把传递函数名的那个形参callback，可省略
  success: function (data){
    console.log(data);}
});
