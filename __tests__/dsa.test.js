'use strict';

const LinkedList = require('../data-structures/linked-list');
const Stack = require('../data-structures/stack');
const Queue = require('../data-structures/queue');
const Tree = require('../data-structures/tree');
const HashMap = require('../data-structures/hashtable');

const practice = require('../dsa.js');
const { it } = require('@jest/globals');



describe('Dsa daily practice', () => {

  it('should test linked list iteratively', () => {

    const list = new LinkedList();
    list.append(1);
    list.append(12);
    list.append(5);
    list.append(9);

    const iLargest = practice.iterateLinkedListIteratively(list);
    console.log(`Linked List: Iterative Largest: ${iLargest}`);

  });

  it('should test linked list recursively', () => {

    const list = new LinkedList();
    list.append(1);
    list.append(12);
    list.append(5);
    list.append(9);

    const rLargest = practice.iterateLinkedListRecursively(list.head);
    console.log(`Linked List: Recursive Largest: ${rLargest}`);
  });

  it('should test stack iterations iteratively', () => {

    const numbers = new Stack();

    numbers.push(1);
    numbers.push(12);
    numbers.push(5);
    numbers.push(9);

    const iLargest = practice.iterateStackIteratively(numbers);
    console.log(`Stack: Iterative Largest: ${iLargest}`);
  });

  it('should test stack iterations recursivley', () => {

    const numbers = new Stack();

    numbers.push(1);
    numbers.push(12);
    numbers.push(5);
    numbers.push(9);

    const rLargest = practice.iterateStackRecursively(numbers);
    console.log(`Stack: Recursive Largest: ${rLargest}`);

  });


  it('should test queues iterativley', () => {


    const numbers = new Queue();

    numbers.enqueue(1);
    numbers.enqueue(12);
    numbers.enqueue(5);
    numbers.enqueue(9);

    const iLargest = practice.iterateQueueIteratively(numbers);
    console.log(`Queue: Iterative Largest: ${iLargest}`);
  });

  it('should test queues recursivley', () => {

    const numbers = new Queue();

    numbers.enqueue(1);
    numbers.enqueue(12);
    numbers.enqueue(5);
    numbers.enqueue(9);

    const rLargest = practice.iterateQueueRecursively(numbers);
    console.log(`Queue: Recursive Largest: ${rLargest}`);

  });

  it('should test tree pre-order', () => {

    const tree = new Tree();

    const numbers = [9, 4, 17, 3, 6, 22, 5, 7, 20];

    numbers.forEach(num => tree.insert(num))

    const preOrderValues = practice.preOrderTraversal(tree.root, []);
    console.log('Pre Order: ', preOrderValues);
  });

  it('should test tree in-order', () => {

    const tree = new Tree();

    const numbers = [9, 4, 17, 3, 6, 22, 5, 7, 20];

    numbers.forEach(num => tree.insert(num))

    const inOrderValues = practice.inOrderTraversal(tree.root, []);
    console.log('In Order: ', inOrderValues);
  });

  it('should test tree in post-order', () => {
    const tree = new Tree();

    const numbers = [9, 4, 17, 3, 6, 22, 5, 7, 20];

    numbers.forEach(num => tree.insert(num))

    const postOrderValues = practice.postOrderTraversal(tree.root, []);
    console.log('Post Order: ', postOrderValues);
  });

  it('should test tree in breadth-traversal', () => {
    const tree = new Tree();

    const numbers = [9, 4, 17, 3, 6, 22, 5, 7, 20];

    numbers.forEach(num => tree.insert(num))

    const breadthFirstValues = practice.breadthFirstTraversal(tree);
    console.log('Breadth First Order: ', breadthFirstValues);
  });

  it('should test if a tree contains value of 22', () => {

    const tree = new Tree();

    const numbers = [9, 4, 17, 3, 6, 22, 5, 7, 20];

    numbers.forEach(num => tree.insert(num))

    const containsTrue = practice.contains(tree, 22);
    console.log('Tree Contains 22:', containsTrue);
  });

  it('should test if tree contains value of 67', () => {

    const tree = new Tree();

    const numbers = [9, 4, 17, 3, 6, 22, 5, 7, 20];

    numbers.forEach(num => tree.insert(num))

    const containsFalse = practice.contains(tree, 67);
    console.log('Tree Contains 67:', containsFalse);

  });

});