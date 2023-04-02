/**
 * 선형 탐색 (Linear Search)
 *
 * 특정 값이 배열 안에 포함되어 있는지 순서대로 살펴보는 방법
 * 시간 복잡도 (Big O) : O(n)
 * indexOf, Includes, find, findIndex 메소드
 */

// 배열 안의 target 위치를 반환하는 함수 (없는 경우 -1 반환)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) return i;
  }
  return -1;
}

linearSearch([1, 2, 3, 4], 2); // 1
