/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number[]}
 */
var change = function(amount, coins) {
  const arr = new Array(amount + 1).fill(0);
  arr[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      arr[j] += arr[j - coins[i]];
    }
  }
  console.log(arr);
  return arr[amount];
};

// 求出具体组合
var change2 = function(amount, coins) {
  const arr = new Array(amount + 1).fill([]);
  arr[0] = [''];
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      arr[j] = arr[j].concat(arr[j - coins[i]].map(set => set + coins[i]));
    }
  }
  console.log(arr);
  return arr[amount];
};

console.log(change2(5, [1, 2, 5]));
