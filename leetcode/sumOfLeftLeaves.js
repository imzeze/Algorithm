/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  return bfs(root, 0);
};

const bfs = (root, sum) => {
  if (!root) return 0;
  if (!root.left && !root.right) return sum;

  if (root.left && !root.left.left && !root.left.right) {
    sum += root.left.val;
  }

  return bfs(root.left, sum) + bfs(root.right, 0);
};
