var calcEquation = function (equations, values, queries) {
  const answer = [];
  const equationList = {};

  for (let i = 0; i < equations.length; i++) {
    let [x, y] = equations[i];

    equationList[x] = { ...equationList[x], [y]: values[i] };
    equationList[y] = { ...equationList[y], [x]: 1 / values[i] };
  }

  const dfs = (x, y, visited) => {
    if (!equationList[x] || !equationList[y]) return -1;
    if (x === y) return 1;

    visited.add(x);
    for (const neighbor in equationList[x]) {
      if (!visited.has(neighbor)) {
        const result = dfs(neighbor, y, visited);
        if (result !== -1) return equationList[x][neighbor] * result;
      }
    }

    return -1;
  };

  for (let i = 0; i < queries.length; i++) {
    const visited = new Set();
    let [x, y] = queries[i];
    answer.push(dfs(x, y, visited));
  }

  return answer;
};
