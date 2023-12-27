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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const answer = [];

  return bfs(root, answer, 0);
};

const bfs = (root, answer, level) => {
  if (!root || root.val === undefined) return answer;

  if (root.left) bfs(root.left, answer, level + 1);
  if (root.right) bfs(root.right, answer, level + 1);

  if (answer[level]) answer[level].push(root.val);
  else answer[level] = [root.val];

  return answer;
};
