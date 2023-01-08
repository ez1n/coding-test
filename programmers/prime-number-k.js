/**
 * Lv.2 K진수에서 소수 구하기
 * 
 * 양의 정수 n이 주어집니다. 
 * 이 숫자를 k진수로 바꿨을 때, 변환된 수 안에 아래 조건에 맞는 소수(Prime number)가 몇 개인지 알아보려 합니다.
 * 
 * 0P0처럼 소수 양쪽에 0이 있는 경우
 * P0처럼 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
 * 0P처럼 소수 왼쪽에만 0이 있고 오른쪽에는 아무것도 없는 경우
 * P처럼 소수 양쪽에 아무것도 없는 경우
 * 단, P는 각 자릿수에 0을 포함하지 않는 소수입니다.
 * 예를 들어, 101은 P가 될 수 없습니다.
 * 
 * 정수 n과 k가 매개변수로 주어집니다. 
 * n을 k진수로 바꿨을 때, 변환된 수 안에서 찾을 수 있는 위 조건에 맞는 소수의 개수를 return 하도록 solution 함수를 완성해 주세요.
 * 
 * 제한사항
 * 1 ≤ n ≤ 1,000,000
 * 3 ≤ k ≤ 10
 * 
 */

function isPrimeNumber(n) {
  if (n > 1) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return;
    }
    return true;
  }
}

function solution(n, k) {
  let answer = 0
  let number = (n).toString(k).split("0");

  for (let x of number) {
    isPrimeNumber(x) && answer++;
  }

  return answer;
}