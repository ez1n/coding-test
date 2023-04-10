/**
 * 큐 (queue)
 *
 * FIFO (First In First Out) 원칙을 따르는 데이터 구조
 * 큐에 가장 먼저 추가된 요소가 가장 먼저 제거됨
 * 삽입, 삭제 시간 복잡도 : O(1)
 */

// 배열을 이용한 구현
let q = [];
q.push("first");
q.push("second");
q.push("third");

console.log(q); // [ 'first', 'second', 'third' ]

q.shift(); // first

console.log(q); // [ 'second', 'third' ]

// 클래스를 이용한 구현
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.size) return null;

    let removeNode = this.first;
    if (this.size === 1) {
      this.last.next = null;
    }
    this.first = removeNode.next;
    removeNode.next = null;
    this.size--;

    return removeNode.value;
  }
}

let queue = new Queue();
queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("last");

console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
