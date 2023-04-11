/**
 * 너비 우선 탐색 (BFS, Breadth-First Search)
 *
 * 같은 레벨에 있는 노드를 우선으로 탐색하는 방법
 * 큐(queue) 사용하여 구현
 * 모든 트리에 적용 가능
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

  // 너비 우선 탐색
  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

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
console.log("bfs", tree.BFS());
