// https://leetcode.com/problems/same-tree/description/
// bfs

var isSameTree = function (p, q) {
  const p_queue = [p];
  const q_queue = [q];

  while (p_queue.length || q_queue.length) {
    const p_node = p_queue.shift();
    const q_node = q_queue.shift();

    if (p_node?.val !== q_node?.val) {
      return false;
    }

    if (p_node) {
      p_queue.push(p_node.left);
      p_queue.push(p_node.right);
    }

    if (q_node) {
      q_queue.push(q_node.left);
      q_queue.push(q_node.right);
    }
  }

  return true;
};
