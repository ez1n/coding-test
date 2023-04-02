/**
 * 이진 탐색 (Binary Search)
 *
 * 범위를 정해서 그 안에서만 탐색하는 방법
 * 데이터가 분류되어 있어야 함 (정렬)
 * 분할 정복 (dividing and conquering)
 */

// 분류된 배열을 인자로 받아 target의 위치를 반환하는 이진 탐색 함수 (값이 없는 경우 -1 반환)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] > target) right = mid - 1;
    if (arr[mid] < target) left = mid + 1;
  }

  return -1;
}
