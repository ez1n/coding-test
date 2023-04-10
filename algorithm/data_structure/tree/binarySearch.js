/**
 * 이진 검색 트리 (Binary Search Tree)
 *
 * 시간 복잡도 : 삽입 - O(log n), 삭제 - O(log n)
 * 데이터를 비교해서 정렬 가능하도록 저장되는 이진 트리
 * 순서가 있는 정렬된 데이터를 통해 탐색
 * 왼쪽 노드는 오른쪽 노드보다 항상 작음
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(8);
tree.insert(5);
tree.insert(9);
console.log(tree.contain(15));
