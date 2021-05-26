'use strict';

const LinkedList = require('./linked-list');


class Queue {

  constructor() {
    this.storage = new LinkedList();
  }

  enqueue(item) {
    this.storage.append(item);
  }

  dequeue() {
    const node = this.storage.removeHead();
    return node.value;
  }

  peek() {
    return this.storage.head ? this.storage.head.value : null;
  }
}

module.exports = Queue;
