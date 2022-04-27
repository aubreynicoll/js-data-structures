/**
 * Container with a single pointer
 */
class Node<T> {
  value: T;
  next: Node<T> | null;

  /**
   * Returns a new Node
   * @param {any} value The value stored in the Node
   */
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default Node;
