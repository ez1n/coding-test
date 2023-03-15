/**
 * Lv.0 연속된 수의 합
 *
 * 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다.
 * 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.
 *
 * 제한사항
 *
 * 1 ≤ num ≤ 100
 * 0 ≤ total ≤ 1000
 * num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
 *
 */

// 내 풀이
function solution(num, total) {
  let answer = [];
  for (let i = 0; i < num; i++) {
    total -= i;
  }

  const result = total / num;
  for (let x = 0; x < num; x++) {
    answer.push(result + x);
  }

  return answer;
}

// 가우스 덧셈 공식 응용
function gauss(num, total) {
  const min = Math.ceil(total / num - Math.floor(num / 2));
  return Array(num)
    .fill()
    .map((_, i) => i + min);
}
