'use strict';


practice.iterateLinkedListIteratively = function (list) {
  let largest = list.head.value;
  let current = list.head.next;
  while (current) {
    largest = largest > current.value ? largest : current.value;
    current = current.next;
  }
  return largest;
}