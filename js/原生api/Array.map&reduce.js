// Array.prototype.map
Array.prototype.myMap = function(callback, thisArg) {
  const arr = Array.prototype.slice.call(this); //  防止上下文改变this
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback.call(thisArg, arr[i], i, arr));
  }
  return result;
};

// Array.prototype.reduce
Array.prototype.myReduce = function(callback, initVal) {
  const arr = Array.prototype.slice.call(this);
  let result = initVal || arr[0];
  const startIndex = initVal ? 0 : 1;
  for (let i = startIndex; i < arr.length; i++) {
    result = callback.call(this, result, arr[i], i, arr);
  }
  return result;
};
