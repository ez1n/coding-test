/**
 * 단방향 연결 리스트 (Single Linked List)
 */

// Node : value (단일 데이터 항목)을 저장
// 호출될 다음 노드들에 대한 참조 정보인 "next" 저장
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/*
let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");

console.log(first);
// Node {
//  val: 'Hi',
//  next: Node { val: 'there', next: Node { val: 'how', next: [Node] } }
// }
*/

// 단방향 연결 리스트
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let cur = this.head;
    let newTail = cur;

    while (cur.next) {
      newTail = cur;
      cur = cur.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return cur;
  }

  shift() {
    if (!this.head) return undefined;

    const curHead = this.head;
    this.head = curHead.next;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return curHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let count = 0; count < index; count++) {
      current = current.next;
    }

    return current;
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

    let prev = this.get(index - 1);
    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prev = this.get(index - 1);
    let removeNode = prev.next;
    prev.next = removeNode.next;
    this.length--;

    return removeNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.reverse();

console.log(list);
