'use strict';

const { BinarySearchTree } = require('./binarysearch.js');

class BinaryTreeMaxValue extends BinarySearchTree {

  findMax() {
    if (this.root === null) {
      throw 'Empty!';
    }
    let currNode = this.root;

    while (currNode.right !== null) {
      currNode = currNode.right;
    }
    return currNode.value;
  }

  findMin() {
    if (this.root === null) {
      throw 'Empty !';
    }
    let currNode = this.root;

    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    return currNode.value;
  }
}



module.exports = { BinaryTreeMaxValue };
