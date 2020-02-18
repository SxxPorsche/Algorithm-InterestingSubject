const isNextNode = (a, b) => {
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diff ++;
    if (diff > 1) return false;
  }
  return true;
};

var ladderLength = function(beginWord, endWord, wordList) {
  let queue = [beginWord];
  const index = wordList.indexOf(beginWord);
  if(index !== -1) wordList.splice(index, 1);

  let res = 2; // 仅有一处不同时为2
  while(queue.length) {
    let size = queue.length;
    while(size --) {
      let front = queue.shift();
      for(let i = 0; i < wordList.length; i++) {
        if (isNextNode(front, wordList[i])) {
          // 找到了
          if(wordList[i] === endWord) {
            return res;
          } else {
            queue.push(wordList[i]);
          }
          // wordList[i]已经成功推入，现在不需要了，删除即可
          // 这一步性能优化，相当关键，不然100%超时
          wordList.splice(i, 1);
          i --;
        }
      }
    }
    // 步数 +1
    res += 1;
  }
  return 0;
};

