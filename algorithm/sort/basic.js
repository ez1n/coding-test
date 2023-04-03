/**
 * 정렬 알고리즘 (Sorting Algorithm)
 *
 * 항목을 재배열하는 과정
 * 일반적으로 배열 사용 → 트리 등의 데이터 구조에도 정렬 적용 가능
 *
 * 기본 내장 자바스크립트 정렬
 * Array.sort()
 */

// 1. 기본 정렬
// 기본 정렬 순서는 문자열 유니코드의 코드 포인트에 따름
function basicSort(arr) {
  return arr.sort();
}

console.log(basicSort([23, 45, 6, 12, 13]));
// 예상 : [6, 12, 13, 23, 45]
// 결과 : [12, 13, 23, 45, 6]

// 2. 속성, 비교 대상을 지정한 정렬
function sort(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sort([23, 45, 6, 12, 13])); // [12, 13, 23, 45, 6]

// 3. 문자열 길이 오름차순 정렬
function stringSortByLen(arr) {
  return arr.sort((str1, str2) => str1.length - str2.length);
}
console.log(
  stringSortByLen(["Steele", "Colt", "Data Stuructures", "Algorithms"])
); // ["Colt", "Steele", "Algorithms", "Data Stuructures"]
