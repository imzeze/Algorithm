// https://leetcode.com/problems/balanced-binary-tree/

var isBalanced = function (root) {
  if (!root) return true;

  return getDepth(root) === -1 ? false : true;
};

const getDepth = (root) => {
  if (!root) return 0;

  const left = getDepth(root.left);
  const right = getDepth(root.right);

  if (left === -1 || right === -1) return -1;
  if (Math.abs(left - right) > 1) return -1;
  return Math.max(left, right) + 1;
};
