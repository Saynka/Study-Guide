'use strict';

const LinkedList = require('./linked-list');

class Hashmap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size); //.fill();
  }

  hash(key) {
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  set(key, value) {
    const hash = this.hash(key);

    if (!this.map[hash]) { this.map[hash] = new LinkedList(); }

    let entry = { [key]: value };
    this.map[hash].append(entry);
  }

  get(key) {
    const hash = this.hash(key);

    if (this.map[hash]) {
      let current = this.map[hash].head;
      while (current) {
        if (current.value[key]) { return current.value[key]; }
        current = current.next;
      }
    }

    return null;

  }

  has(key) {
    const hash = this.hash(key);

    if (this.map[hash]) {
      let current = this.map[hash].head;
      while (current) {
        if (current.value[key]) { return true; }
        current = current.next;
      }
    }

    return false;

  }

}

module.exports = Hashmap;