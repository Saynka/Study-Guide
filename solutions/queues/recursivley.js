'use strict';


practice.iterateQueueRecursively = function (queue, largest = 0) {
  if (!queue.peek()) { return largest }
  largest = largest > queue.peek() ? largest : queue.peek();
  queue.dequeue();
  return practice.iterateQueueRecursively(queue, largest);
}
