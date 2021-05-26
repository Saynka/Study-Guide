'use strict';

const Node = require('./node.js');

class Tree {

  constructor() {
    this.root = null;
  }

  insert(value) {

    const node = this.root;
    if (node === null) {
      this.root = new Node(value);
      return;
    }

    let _insert = (node) => {

      // Left is less  (< value)  ()< value  ()< value  ()< value
      if (value < node.value) {
        // If no left node, create a new node for it, with the current value
        if (node.left === null) {
          node.left = new Node(value);
          return;
        }
        // Otherwise,
        else if (node.left !== null) {
          return _insert(node.left);
        }
      }
      // Right is might (> value)
      else if (value >= node.value) {
        // If no right node, create a new node for it, with the current value
        if (node.right === null) {
          node.right = new Node(value);
          return;
        }
        // Otherwise,
        else if (node.right !== null) {
          return _insert(node.right);
        }
      }
      else {
        return null;
      }
    };

    _insert(node);

  }

}

module.exports = Tree;
