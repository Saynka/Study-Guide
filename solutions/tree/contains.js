'use strict';


practice.contains = function (tree, value) {
  const _helper = (node, value) => {
    if (!node) { return false }
    if (node.value === value) { return true }
    if (value < node.value) {
      return _helper(node.left, value);
    } else {
      return _helper(node.right, value)
    }
  }
  return _helper(tree.root, value);
}