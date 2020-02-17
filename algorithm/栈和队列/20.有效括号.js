var isValid = function(s) {
  const stack = [];
  const leftQuote = ['(', '[', '{'];
  for (let i = 0; i < s.length; i ++) {
    if (leftQuote.includes(s[i])) {
      stack.push(s[i]);
    } else {

    }
  }
  return true;
};