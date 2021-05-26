'use strict';

practice.iterateStackIteratively = function (stack) {
  let largest = stack.peek();
  let curr = stack.storage.head.next;
  while (curr) {
    largest = largest > curr.value ? largest : curr.value;
    curr = curr.next;
  }
  return largest;
}