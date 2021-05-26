'use strict';

practice.preOrderTraversal = function (node, values = []) {
  if (!node) { return values }
  values.push(node.value);
  practice.preOrderTraversal(node.left, values);
  practice.preOrderTraversal(node.right, values);
  return values;
}