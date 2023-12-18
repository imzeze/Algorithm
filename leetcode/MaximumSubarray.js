var maxSubArray = function (nums) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum >= 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }

    answer = Math.max(sum, answer);
  }

  return answer;
};
