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

// Array.prototype.filter
Array.prototype.myFilter = function(callback, thisArg) {
  const arr = Array.prototype.slice.call(this); //  防止上下文改变this
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

//Array.prototype.flat 数组扁平化
Array.prototype.myFlat1 = function() {
  const arr = Array.prototype.slice.call(this); //  防止上下文改变this
  return arr.toString().split(',').map(item => +item);
};
Array.prototype.myFlat2 = function(deep = 1) { // 扁平化深度
  function recursiveFlat(array, depth) {
    return array.reduce((cur, next) => {
      return Array.isArray(next) && depth > 1 ?
        cur.concat(recursiveFlat(next, depth - 1)) :
        cur.concat(next)
    }, []);
  }
  const arr = Array.prototype.slice.call(this); //  防止上下文改变this
  return recursiveFlat(arr, deep);
};


// Reduce 实现 Map
Array.prototype._map = function(fn, callbackThis) {
  let _this = callbackThis || null;
  return this.reduce((total, curItem, index, arr) => {
    total.push(fn.call(_this, curItem, index, arr));
    return total;
  }, []);
};

let a = [1, 2, 3, 4, 5];
console.log(a._map((item, index) => item * 5));
