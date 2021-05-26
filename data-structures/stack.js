'use strict';

const LinkedList = require('./linked-list');

class Stack {

  constructor() {
    this.top = null;
    this.storage = new LinkedList();
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }

  push(item) {
    this.storage.prepend(item);
  }

  pop() {
    const node = this.storage.removeHead();
    return node.value;
  }

  peek() {
    return this.storage.head ? this.storage.head.value : null;
  }

}

module.exports = Stack;
