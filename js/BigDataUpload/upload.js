const fs = require('fs');

const request = require('../xhrRequest');
fs.readFile('../../sort/sort.png', function (err, data) {
  console.log(data.length);
});

const LENGTH = 10; // 切片数量

function createFileChunk(file, length = LENGTH) {
  const fileChunkList = [];
  const chunkSize = Math.ceil(file.length / length);
  let cur = 0;
  while(cur < file.length) {
    fileChunkList.push({
      file: file.slice(cur, cur + chunkSize),
    });
  }
  return fileChunkList;
}
