var minCostClimbingStairs = function (cost) {
  let first = cost[0];
  let second = cost[1];

  if (cost.length < 3) return Math.min(first, second);
  for (let i = 2; i < cost.length; i++) {
    const sum = cost[i] + Math.min(first, second);
    first = second;
    second = sum;
  }

  return Math.min(first, second);
};
