// 传进函数的是原对象的地址(或者说引用) 函数都是按值传递的
// 地址赋值给了形参 a (形参看做局部变量)
function changeObjProperty(a) {
  // 相当于 var a = website
  a.siteUrl = "http://www.baidu.com";
  // 变量a指向新的地址 以后的变动和旧地址无关
  a = new Object(); // 形参指向新地址
  a.siteUrl = "http://www.google.com";
  a.name = 456;
}
var webSite = new Object();
webSite.name = '123';
changeObjProperty(webSite);
console.log(webSite); // {name: 123, siteUrl: 'http://www.baidu.com'}
