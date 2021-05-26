'use strict';

const Node = require('./node.js');
const { BinaryTree } = require('./tree.js');


class BinarySearchTree extends BinaryTree {

  // helper method which creates a new node to 
  // be added and calls addNod
  // Method to add a node in a tree
  // it moves over the tree to find the location
  // to add a node with a given value 
  addNode(node, newNode) {
    // if the value is less than the node
    // value move left of the tree 
    if (newNode.value < node.value) {
      // if left is null add node here
      if (node.left === null)
        node.left = newNode;
      else

        // if left is not null recur until 
        // null is found
        this.addNode(node.left, newNode);
    }

    // if the value is more than the node
    // value move right of the tree 
    else {
      // if right is null add node here
      if (node.right === null)
        node.right = newNode;
      else

        // if right is not null recur until 
        // null is found
        this.addNode(node.right, newNode);
    }
  }

  add(value) {
    // Creating a node and initailising 
    // with value 
    var newNode = new Node(value);

    // root is null then node will
    // be added to the tree and made root.
    if (this.root === null)
      this.root = newNode;
    else

      // find the correct position in the 
      // tree and add the node
      this.addNode(this.root, newNode);
  }

  // helper method that calls the 
  // removeNode with a given value
  remove(value) {
    // root is re-initialized with
    // root of a modified tree.
    this.root = this.removeNode(this.root, value);
  }

  // Method to remove node with a 
  // given value
  // it recur over the tree to find the
  // value and removes it
  removeNode(node, key) {

    // if the root is null then tree is 
    // empty
    if (node === null)
      return null;

    // if value to be delete is less than 
    // roots value then move to left subtree
    else if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    // if value to be delete is greater than 
    // roots value then move to right subtree
    else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // if value is similar to the root's value 
    // then delete this node
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      }

      else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      // minumum node of the rigt subtree
      // is stored in aux
      var aux = this.findMinNode(node.right);
      node.value = aux.value;

      node.right = this.removeNode(node.right, aux.value);
      return node;
    }

  }

  breadth(tree, rootNode, searchValue) {
    // make a queue array
    let queue = [];
    let path = [];
    // populate it with the node that will be the root of your search
    queue.push(rootNode);

    // search the queue until it is empty
    while (queue.length > 0) {
      // assign the top of the queue to variable currentNode
      let currentNode = queue[0];
      path.push(currentNode.value);

      // if currentNode is the node we're searching for, break & alert
      if (currentNode.value === searchValue) {
        return path;
      }

      // if currentNode has a left child node, add it to the queue.
      if (currentNode.left !== null) {
        queue.push(tree[currentNode.left]);
      }

      // if currentNode has a right child node, add it to the queue.
      if (currentNode.right !== null) {
        queue.push(tree[currentNode.right]);
      }
      // remove the currentNode from the queue.
      queue.shift();
    }
  }

  fizzBuzz() {
    if (!this.root) {
      return 'Empty';
    }

    let queue = [];
    let path = [];

    queue.push(this.root);



    while (queue.length > 0) {

      let currentNode = queue.shift();
      path.push(currentNode.value);


      if (currentNode.value % 15 === 0) {
        console.log('FizzBuzz');

      } else if (currentNode.value % 3 === 0) {
        console.log('Fizz');

      } else if (currentNode.value % 5 === 0) {
        console.log('Buzz');

      } else if (currentNode.value) {
        console.log(currentNode.value);
        console.log(path);
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    return path;
  }
}


module.exports = { BinarySearchTree };

