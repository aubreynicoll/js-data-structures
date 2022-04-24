class Node {
  value
  next

  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  #head
  #tail
  #size

  constructor() {
    this.#head = null
    this.#tail = null
    this.#size = 0
  }

  get size() {
    return this.#size
  }

  set size(x) {
    throw new Error("Queue.size is read-only")
  }

  push(value) {
    if (!arguments.length)
      return this.#size

    const node = new Node(value)

    if (this.#size) {
      this.#tail.next = node
      this.#tail = node
    } else {
      this.#head = node
      this.#tail = node
    }

    this.#size += 1

    return this.#size
  }

  pop() {
    if (!this.#size)
      return undefined

    const value = this.#head.value

    if (this.#size > 1) {
      this.#head = this.#head.next
      this.#size -= 1
    } else {
      this.clear()
    }

    return value
  }

  clear() {
    this.#head = null
    this.#tail = null
    this.#size = 0
  }
}

module.exports = Queue