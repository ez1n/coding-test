/**
 * 버블 정렬 (Bubble Sort)
 *
 * Big O : O(n^2) - 일반적인 경우, O(n) - 거의 정렬된 배열인 경우
 * 배열을 오름차순으로 정렬하는 경우 더 큰 숫자가 한 번에 하나씩 뒤로 이동하는 정렬 방법
 * 많이 사용되는 알고리즘은 아니다!
 */

// 교환 방법
// 1. ES5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// 2. ES2015
function swap2(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// 버블 정렬
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([37, 45, 29, 8])); // [ 8, 29, 37, 45 ]

// 최적화 - 정렬이 거의 되어 있는 경우 효율적인 방법
function bubbleSortOpt(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSortOpt([8, 1, 2, 3, 4, 5, 6, 7])); // [1, 2, 3, 4, 5, 6, 7, 8]
