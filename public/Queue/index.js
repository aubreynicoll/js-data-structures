'use strict';

// Node Modules
const util = require('util');

/**
 * Private helper class for Queue
 */
class Node {
  /**
   * Returns a new Node
   * @param {any} value The value stored in Node
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Public class Queue
 * Implemented using a singly-linked list, but with an added tail pointer
 */
class Queue {
  #head;
  #tail;
  #size;

  /**
   * Return a new Queue
   * @param {any[]} values Array of values to be pushed in Queue
   */
  constructor(values = []) {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;

    for (const value of values) {
      this.push(value);
    }
  }

  /**
   * Access private field #size
   */
  get size() {
    return this.#size;
  }

  /**
   * Throw Error if user attemps to modify Queue size
   * Added this because otherwise it seemed to fail silently
   * (i.e. assignment expression resolves to assigned value,
   * but Queue size would remain unchanged).
   * @param {any} x set size to x
   */
  set size(x) {
    throw new Error('Queue.size is read-only');
  }

  /**
   * Push a value into the Queue
   * @param {any} value Push value into the Queue
   * @return {number} The size of the Queue after the push operation
   */
  push(value) {
    if (!arguments.length) {
      return this.#size;
    }

    const node = new Node(value);

    if (this.#size) {
      this.#tail.next = node;
      this.#tail = node;
    } else {
      this.#head = node;
      this.#tail = node;
    }

    this.#size += 1;

    return this.#size;
  }

  /**
   * Pop a value from the Queue
   * @return {any} The first-inserted value
   */
  pop() {
    if (!this.#size) {
      return undefined;
    }

    const value = this.#head.value;

    if (this.#size > 1) {
      this.#head = this.#head.next;
      this.#size -= 1;
    } else {
      this.clear();
    }

    return value;
  }

  /**
   * Empty the Queue
   */
  clear() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  /**
   * Implement console.log output in Node.js
   * @return {string}
   */
  [util.inspect.custom]() {
    const values = [];

    let currentNode = this.#head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return `Queue(${this.#size}) ${util.formatWithOptions(
      { colors: true },
      values,
    )}`;
  }
}

module.exports = Queue;
