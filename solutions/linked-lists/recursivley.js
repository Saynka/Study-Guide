'use strict';

practice.iterateLinkedListRecursively = function (node, largest = 0) {
  if (!node) { return largest }
  largest = largest > node.value ? largest : node.value;
  return practice.iterateLinkedListRecursively(node.next, largest);

};
