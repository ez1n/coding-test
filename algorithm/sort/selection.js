/**
 * 선택 정렬 (Selection Sort)
 *
 * Big O : O(n^2)
 * 최솟값을 찾아 정해진 위치의 값과 교환하는 정렬 방법
 * 정렬의 첫 번째 값을 선택하고 다음 항목과 비교하여 더 작은 값을 최솟값으로 저장
 * 마지막까지 비교 후 최솟값의 위치와 첫 번째 위치를 바꿈
 * 두 번째 값도 같은 방법으로 교환
 * 위 과정을 반복하여 정렬
 */

// 선택 정렬
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }

    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([32, 22, 10, 19, 17])); // [ 10, 17, 19, 22, 32 ]
