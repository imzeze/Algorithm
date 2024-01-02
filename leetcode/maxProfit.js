/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let next = 1;
  let curr = 0;
  let profit = 0;

  while (prices.length > curr) {
    if (prices[curr] < prices[next]) {
      profit = Math.max(profit, prices[next] - prices[curr]);
    } else {
      curr = next;
    }
    next++;
  }

  return profit;
};
