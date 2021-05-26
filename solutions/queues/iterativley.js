'use strict';

practice.iterateQueueIteratively = function (queue) {
  let largest = queue.peek();
  while (queue.peek()) {
    largest = largest > queue.peek() ? largest : queue.peek();
    queue.dequeue();
  }
  return largest;
}