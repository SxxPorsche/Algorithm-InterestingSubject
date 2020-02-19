Array.prototype.myPush = function(node) {
  const array = this;
  array.length += 1;
  array[array.length - 1] = node;
  return array.length;
};

Array.prototype.myPop  = function() {
  const array = this;
  const node = array[array.length - 1];
  array.length -= 1;
  return node;
};

const arr = [1,2,3,4,5];
arr.myPush(6);
arr.myPush(7);
const node = arr.myPop();
console.log(node, arr);
