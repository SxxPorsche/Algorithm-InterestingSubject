// instanceof
function myInstanceOf(instance, target) {
  let instanceProto = instance.__proto__;
  let targetProto = target.prototype;
  while(true) {
    if(instanceProto === null) return false;
    if(instanceProto === targetProto) return true;
    instanceProto = instanceProto.__proto__; // 继续下沉查询
  }
}
