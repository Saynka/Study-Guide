'use strict';

practice.iterateStackRecursively = function (stack, largest = 0) {
  if (!stack.peek()) { return largest }
  largest = largest > stack.peek() ? largest : stack.peek();
  stack.pop();
  return practice.iterateStackRecursively(stack, largest);
}