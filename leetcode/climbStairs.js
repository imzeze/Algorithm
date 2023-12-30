var climbStairs = function (n) {
  if (n === 1) return 1;

  let prev = 1;
  let curr = 1;
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    sum = prev + curr;
    prev = curr;
    curr = sum;
  }

  return sum;
};
