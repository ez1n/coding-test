/**
 * 퀵 정렬 (Quick Sort)
 *
 * Big O : Best, Average - O(n log n) / Worst - O(n^2)
 * 데이터를 분할하여 개별적으로 정렬하는 방법
 * 배열 길이가 0 / 1이 될 때까지 분할
 * 피벗 포인트(단일 요소) 선택하여 수행
 * 모두 정렬하는 것이 아니라 숫자를 한쪽으로 옮기는 것이 포인트!
 */

// pivot
function pivot(arr, sp = 0, ep = arr.length + 1) {
  let p = arr[sp];
  let index = sp;

  for (let i = sp + 1; i < ep; i++) {
    if (arr[i] < p) {
      index++;
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }

  [arr[sp], arr[index]] = [arr[index], arr[sp]];

  return index;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); // [3, 2, 1, 4, 5, 7, 6, 8]

// 퀵 정렬
function quickSort(arr, sp = 0, ep = arr.length - 1) {
  if (sp < ep) {
    let pivotIndex = pivot(arr, sp, ep);
    quickSort(arr, sp, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, ep);
  }

  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3])); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
