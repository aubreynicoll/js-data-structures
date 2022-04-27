// Classes
import Queue from '../Queue';

describe('Public Class: Queue', () => {
  test('Constructor with no args', () => {
    const queue = new Queue();
    expect(queue instanceof Queue).toBe(true);
    expect(queue.size).toBe(0);
  });

  test('Constructor with array arg', () => {
    const queue = new Queue(['a', 'b', 'c']);
    expect(queue instanceof Queue).toBe(true);
    expect(queue.size).toBe(3);
  });

  test('Pushing values to Queue', () => {
    const queue = new Queue();

    expect(queue.push('a')).toBe(1);
    expect(queue.size).toBe(1);

    expect(queue.push('b')).toBe(2);
    expect(queue.size).toBe(2);

    expect(queue.push('c')).toBe(3);
    expect(queue.size).toBe(3);
  });

  test('Empty pop returns undefined', () => {
    const queue = new Queue();
    expect(queue.pop()).toBeUndefined();
    expect(queue.size).toBe(0);
  });

  test('Popping values from array-constructed Queue', () => {
    const queue = new Queue(['a', 'b', 'c']);

    expect(queue.pop()).toBe('a');
    expect(queue.size).toBe(2);

    expect(queue.pop()).toBe('b');
    expect(queue.size).toBe(1);

    expect(queue.pop()).toBe('c');
    expect(queue.size).toBe(0);
  });

  test('Popping values from pushed-values Queue', () => {
    const queue = new Queue();
    queue.push('a');
    queue.push('b');
    queue.push('c');

    expect(queue.pop()).toBe('a');
    expect(queue.size).toBe(2);

    expect(queue.pop()).toBe('b');
    expect(queue.size).toBe(1);

    expect(queue.pop()).toBe('c');
    expect(queue.size).toBe(0);
  });

  test('Clearing the Queue', () => {
    const queue = new Queue(['a', 'b', 'c']);
    queue.clear();

    expect(queue.size).toBe(0);
    expect(queue.pop()).toBeUndefined();
  });
});
