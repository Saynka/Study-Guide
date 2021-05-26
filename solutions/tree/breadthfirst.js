'use strict';

practice.breadthFirstTraversal = function (tree) {
  const q = new queue();
  const values = [];
  if (!tree.root) { return values }
  q.enqueue(tree.root);
  while (q.peek()) {
    let temp = q.dequeue();
    values.push(temp.value);
    q.enqueue(temp.left);
    q.enqueue(temp.right)
  }
  return values;
}