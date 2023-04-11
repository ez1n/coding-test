/**
 * 힙 (Heaps)
 */

// 최대 이진 힙
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    let idx = this.values.length - 1;
    let idxParent = Math.floor((idx - 1) / 2);

    while (value >= this.values[idxParent]) {
      if (value === this.values[idxParent]) return undefined;

      this.values[idx] = this.values[idxParent];
      this.values[idxParent] = value;
      idx = idxParent;
      idxParent = Math.floor((idx - 1) / 2);
    }

    return this.values;
  }

  removeMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    const target = this.values[0];
    let idx = 0;

    while (true) {
      let idxLeft = 2 * idx + 1;
      let idxRight = 2 * idx + 2;
      let leftChild = this.values[idxLeft];
      let rightChild = this.values[idxRight];
      let idxChange = null;

      if (target < leftChild && target < rightChild) {
        idxChange = leftChild > rightChild ? idxLeft : idxRight;
      } else if (target < leftChild) {
        idxChange = idxLeft;
      } else if (target < rightChild) {
        idxChange = idxRight;
      }

      if (!idxChange) break;

      this.values[idx] = this.values[idxChange];
      this.values[idxChange] = target;
      idx = idxChange;
    }
  }
}

let maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55);

console.log(maxBinaryHeap); // [ 55, 27, 41, 12, 18, 33, 39 ]
maxBinaryHeap.removeMax();
console.log(maxBinaryHeap); // [ 41, 39, 33, 18, 27, 12 ]
