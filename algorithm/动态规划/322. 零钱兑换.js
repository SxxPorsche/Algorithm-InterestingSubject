/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const max = Number.MAX_SAFE_INTEGER;
  const map = new Map();
  map.set(0, 0);
  for (let i = 1; i <= amount; i++) {
    map.set(i, max);
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        map.set(i, Math.min(map.get(i), map.get(i - coins[j]) + 1))
      }
    }
  }
  const res = map.get(amount);
  return res > amount ? -1 : res;
};

console.log(coinChange([2], 1));
