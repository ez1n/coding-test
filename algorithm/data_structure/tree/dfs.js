/**
 * 깊이 우선 탐색 (DFS, Depth-First Search)
 *
 * 같은 레벨의 노드보다 아래 있는 노드를 우선 탐색하는 방법 (수직 탐색)
 * 스택 (Stack), 재귀 함수 사용
 * 전위 순회, 후위 순회, 중위 순회
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 이진 탐색 트리
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let root = this.root;
    while (value !== root.value) {
      if (value < root.value) {
        if (!root.left) {
          root.left = newNode;
          return this;
        }
        root = root.left;
      } else if (value > root.value) {
        if (!root.right) {
          root.right = newNode;
          return this;
        }
        root = root.right;
      }
    }

    return undefined;
  }

  contain(value) {
    if (!this.root) return null;

    let root = this.root;
    while (root) {
      if (value === root.value) return true;
      if (value < root.value) {
        root = root.left;
      } else if (value > root.value) {
        root = root.right;
      }
    }

    return false;
  }

  // 깊이 우선 탐색 - 전위 순회
  DFSPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    return data;
  }

  // 깊이 우선 탐색 - 후위 순회
  DFSPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.value);
    }

    traverse(current);

    return data;
  }

  // 깊이 우선 탐색 - 중위 순회
  DFSInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log("pre-order", tree.DFSPreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
console.log("post-order", tree.DFSPostOrder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log("in-order", tree.DFSInOrder()); // [ 3, 6, 8, 10, 15, 20 ]
