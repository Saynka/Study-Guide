'use strict';


practice.postOrderTraversal = function (node, values = []) {
  if (!node) { return values }
  practice.postOrderTraversal(node.left, values);
  practice.postOrderTraversal(node.right, values);
  values.push(node.value);
  return values;
}