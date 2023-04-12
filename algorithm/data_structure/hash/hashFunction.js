/**
 * 해시 함수 (Hash Function)
 */

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }

  return total;
}

console.log(hash("pink", 11)); // 6

/**
 * 문제점
 *
 * 1. key가 문자열인 경우만 동자갛ㅁ
 * 2. 상수 값의 시간을 가지지 않음 (문자열 길이에 따라 달라짐)
 * 3. 무작위성이 떨어짐 (고르게 분포하지 않음)
 *
 */

// 성능 향상
function upgradeHash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }

  return total;
}

console.log(upgradeHash("pink", 11)); // 1
