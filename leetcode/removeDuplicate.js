// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function (nums) {
  let idx = 0;
  while (idx < nums.length) {
    if (nums[idx] === nums[idx + 1]) nums.splice(idx, 1);
    else idx++;
  }
};
