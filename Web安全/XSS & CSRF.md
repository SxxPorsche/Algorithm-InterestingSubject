xss：跨站脚本攻击，如果不过滤执行了js代码，可能导致cookie泄露等。
防止：过滤



csrf：跨站请求伪造，挟制用户在当前已登录的Web应用程序上执行非本意的操作。
防止：设置token、写操作用post、JSON API禁用CORS、禁用跨域请求、检查referrer
