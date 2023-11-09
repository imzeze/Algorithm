// https://leetcode.com/problems/binary-tree-inorder-traversal/

var inorderTraversal = function (root) {
  const result = [];

  inorder(root, result);

  return result;
};

const inorder = (root, result) => {
  if (!root) return;

  inorder(root.left, result);
  result.push(root.val);
  inorder(root.right, result);

  return root.val;
};
