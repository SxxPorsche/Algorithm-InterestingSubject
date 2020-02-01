JSON.parse(JSON.stringify('需要拷贝的对象'));

// 1、会忽略 undefined
// 2、会忽略 symbol
// 3、不能序列化函数
// 4、不能解决循环引用的对象
// 5、不能正确处理new Date(); 解决办法：将Date对象转成字符串或者时间戳
// 6、不能处理正则 （转换后会变为{}
