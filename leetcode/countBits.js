var countBits = function (n) {
  const answer = [];
  const getCount = (num) => {
    let count = 0;
    while (num > 0) {
      count += num & 1;
      num >>= 1;
    }

    return count;
  };

  for (let i = 0; i <= n; i++) {
    answer.push(getCount(i));
  }

  return answer;
};
