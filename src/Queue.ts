// Node Modules
import * as util from 'util';

// Library
import Node from './lib/SinglyLinkedListNode';

/**
 * Public class Queue
 * Implemented using a singly-linked list, but with an added tail pointer
 */
class Queue<T> {
  #head: Node<T> | null;
  #tail: Node<T> | null;
  #size: number;

  /**
   * Return a new Queue
   * @param {T[]} values Array of values to be pushed in Queue
   */
  constructor(values: T[] = []) {
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
  get size(): number {
    return this.#size;
  }

  /**
   * Push a value into the Queue
   * @param {T} value Push value into the Queue
   * @return {number} The size of the Queue after the push operation
   */
  push(value: T) {
    if (!arguments.length) {
      return this.#size;
    }

    const node: Node<T> = new Node(value);

    if (this.#tail) {
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
  pop(): T | undefined {
    if (!this.#head) {
      return undefined;
    }

    const value: T = this.#head.value;

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
  clear(): void {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  /**
   * Implement console.log output in Node.js
   * @return {string}
   */
  [util.inspect.custom](): string {
    const values: T[] = [];

    let currentNode: Node<T> | null = this.#head;
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

export default Queue;
