/**
 * 스택 (Stack)
 *
 * LIFO (Last In First Out) 원칙을 따르는 데이터 구조
 * 스택에 가장 마지막으로 추가된 요소가 가장 먼저 제거됨
 * 삽입, 삭제 시간 복잡도 : O(1)
 */

// 배열을 이용한 구현
let arrayStack = [];
arrayStack.push("google");
arrayStack.push("instagram");
arrayStack.push("youtube");

console.log(arrayStack);

arrayStack.pop();

// 클래스 이용한 구현
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.size) return null;

    const removeNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = removeNode.next;
    removeNode.next = null;

    this.size--;
    return removeNode.value;
  }
}

let stack = new Stack();
stack.push("hi");
console.log(stack);
stack.pop();
console.log(stack);
