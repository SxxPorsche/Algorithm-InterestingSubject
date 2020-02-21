/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
// 深拷贝
function Clone(pHead) {
  const set = new WeakSet();
  return clone(pHead, set);
}

function clone(source, set) {
  if (!source) return {};
  const obj = {};
  Object.keys(source).forEach((key) => {
    if (source[key] !== null && typeof source[key] === 'object') {
      if (set.has(source[key])) {
        obj[key] = source[key];
      } else {
        set.add(source[key]);
        obj[key] = clone(source[key]);
      }
    } else {
      obj[key] = source[key];
    }
  });
  return obj;
}
