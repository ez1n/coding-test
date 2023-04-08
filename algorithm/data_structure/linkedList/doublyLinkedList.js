/**
 * 이중 연결 리스트 (Double Linked List)
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;

    let prevTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = prevTail.prev;
      this.tail.next = null;
      prevTail.prev = null;
    }

    this.length--;
    return prevTail;
  }

  shift() {
    if (!this.head) return undefined;

    let prevHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = prevHead.next;
      this.head.prev = null;
      prevHead.next = null;
    }

    this.length--;
    return prevHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index > Math.ceil(this.length / 2)) {
      let node = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        node = node.prev;
      }
      return node;
    }

    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) return false;

    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    (prevNode.next = newNode), (newNode.prev = prevNode);
    (newNode.next = nextNode), (nextNode.prev = newNode);

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removeNode = this.get(index);
    let prevNode = removeNode.prev;
    let nextNode = removeNode.next;

    (prevNode.next = nextNode), (nextNode.prev = prevNode);
    (removeNode.next = null), (removeNode.prev = null);

    this.length--;
    return removeNode;
  }

  reverse() {
    let prevHead = this.head;
    this.head = this.tail;
    this.tail = prevHead;

    let curNode = this.tail;
    let nextNode = null;

    for (let i = 0; i < this.length; i++) {
      let prevNode = curNode.next;
      curNode.next = nextNode;
      curNode.prev = prevNode;
      nextNode = curNode;
      curNode = prevNode;
    }

    return this;
  }
}

const list = new DoublyLinkedList();
list.push(2);
list.push(4);
list.push(5);
list.push(8);
list.push(10);
list.push(25);
console.log(list.reverse());
