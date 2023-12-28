var uniquePaths = function (m, n) {
  const arr = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  arr[1][0] = 1;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }

  return arr[m][n];
};
