// https://leetcode.com/problems/remove-element/description/

var removeElement = function (nums, val) {
  let len = nums.length;
  while (len > 0) {
    const num = nums.shift();
    if (num !== val) nums.push(num);
    len--;
  }

  return nums.length;
};
