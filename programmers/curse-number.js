/**
 * Lv.0 저주의 숫자 3
 *
 * 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다
 *
 * 정수 n이 매개변수로 주어질 때,
 * n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 *
 * 1 ≤ n ≤ 100
 *
 */

function solution(n) {
  let number = 0;
  for (let i = 0; i < n; i++) {
    number++;

    while (number % 3 === 0 || String(number).includes("3")) {
      number++;
    }
  }
  return number;
}
