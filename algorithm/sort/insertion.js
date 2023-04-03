/**
 * 삽입 정렬 (Insertion Sort)
 * 버블 정렬, 선택 정렬과 비슷
 *
 * Big O :
 * 배열의 과반을 점차적으로 만들어 정렬을 구축하는 정렬 방법
 * 각 요소를 취하여 정렬되어 있는 절반 속 해당되는 위치에 배치
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      if (current >= arr[j]) break;
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4])); // [ 1, 2, 4, 9, 76 ]
