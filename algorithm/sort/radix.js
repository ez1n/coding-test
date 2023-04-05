/**
 * 기수 정렬 (Radix Sort)
 *
 * Big O : 시간 복잡도 - O(n * k), 공간 복잡도 - O(n + k)
 * * n : 정렬할 항목 수 or 정수의 갯수, k : 수의 최대 길이 (최대 자릿수)
 * 이진수를 사용하는 정렬 방법
 * 비교하여 정렬 ❌
 */

// 원하는 자리의 숫자 반환하기
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / 10 ** i) % 10;
}

console.log(getDigit(12345, 4)); // 1

// 자릿수 반환하기
function digitCount(num) {
  if (isNaN(num)) return "Not A Number";
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(520)); // 3

// 최대 자릿수 반환하기
function mostDigits(arr) {
  return arr.reduce((max, num) => Math.max(max, digitCount(num)), 0);
}

console.log(mostDigits([1234, 56, 7])); // 4

console.clear();

// 기수 정렬
function radixSort(arr) {
  const maxDigit = mostDigits(arr);

  for (let i = 0; i < maxDigit; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    arr.forEach((num) => {
      const digit = getDigit(num, i);
      buckets[digit].push(num);
    });

    arr = buckets.flat();
  }

  return arr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852])); //[ 12, 23, 345, 2345, 5467, 9852 ]
