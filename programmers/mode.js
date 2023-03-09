/**
 * Lv.0 최빈값 구하기
 *
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
 *
 * 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
 * 최빈값이 여러 개면 -1을 return 합니다.
 *
 * 제한사항
 *
 * 0 < array의 길이 < 100
 * 0 ≤ array의 원소 < 1000
 *
 */

function solution(array) {
  let hash = Array(Math.max(...array) + 1).fill(0);
  array.forEach((num) => hash[num]++);

  const mode = Math.max(...hash);
  const modeNum = hash.filter((num) => num === mode).length;

  return modeNum > 1 ? -1 : hash.indexOf(mode);
}
