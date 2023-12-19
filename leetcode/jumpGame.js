var canJump = function (nums) {
  let next = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > next) return false;
    next = Math.max(next, i + nums[i]);
  }

  return next >= nums.length - 1;
};
