// destructuringArray( [1,[2,4],3], "[a,[b],c]" );
// result
// { a:1, b:2, c:3 }

const targetArray = [1, [2, 3], 4];
const formater = "[a, [b], c]";
const formaterArray = ['a', ['b'], 'c'];

function destructuringArray(values, keys) {
  try {
    const obj = {};
    if (typeof keys === 'string') {
      keys = JSON.parse(keys.replace(/\w+/g, '"$&"'));
      console.log(keys)
    }

    const iterate = (values, keys) =>
      keys.forEach((key, i) => {
        if(Array.isArray(key)) iterate(values[i], key);
        else obj[key] = values[i]
      });

    iterate(values, keys)

    return obj;
  } catch (e) {
    console.error(e.message);
  }
}

console.dir(destructuringArray(targetArray,formater));
console.dir(destructuringArray(targetArray,formaterArray));
