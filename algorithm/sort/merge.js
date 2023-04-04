/**
 * 합병 정렬 (Merge Sort)
 *
 * Big O : O(n log n)
 * 배열을 더 작은 배열로 나누는 정렬 방법
 * 분할 정복 알고리즘
 * 배열을 계속 분할한 다음 병합시킴
 * 배열 길이가 0 / 1이 될 때까지 분할
 * 만들 수 있는 가장 작은 배열로 분할 된 경우 병합
 */

// 정렬된 두 배열 합치기
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  if (i > 0 || j > 0) {
    result = result.concat(arr1.slice(i)).concat(arr2.slice(j));
  }

  return result;
}

console.log(merge([1, 2, 5], [3, 4, 5, 7])); // [ 1, 2, 3, 4, 5, 5, 7 ]

// 합병 정렬
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([33, 1, 8, 83])); // [ 1, 8, 33, 83 ]
