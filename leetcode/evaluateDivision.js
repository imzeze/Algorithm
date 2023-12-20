/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const answer = [];
  const equationList = {};

  for (let i = 0; i < equations.length; i++) {
    let [x, y] = equations[i];

    equationList[x] = { ...equationList[x], [y]: values[i] };
    equationList[y] = { ...equationList[y], [x]: 1 / values[i] };
  }

  const dfs = (x, y) => {
    if (!equationList[x] || !equationList[y]) return -1;
    if (equationList[x][y] && equationList[y][x]) {
      return equationList[x][y] / equationList[y][x];
    } else {
      for (neighbor of Object.keys(equationList[x])) {
        if (equationList[y]?.[neighbor]) {
          return equationList[x][neighbor] / equationList[y][neighbor];
        }
      }
    }
    return -1;
  };

  for (let i = 0; i < queries.length; i++) {
    let [x, y] = queries[i];
    answer.push(dfs(x, y));
  }

  return answer;
};
