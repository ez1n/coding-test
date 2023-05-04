/**
 * Lv.2 삼각 달팽이
 *
 * 정수 n이 매개변수로 주어집니다.
 * 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후,
 * 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 *
 * n은 1 이상 1,000 이하입니다.
 *
 */

function solution(n) {
  let x = -1,
    y = 0,
    count = 1;
  let answer = Array.from({ length: n }).map((_, i) => Array(i + 1));

  while (n > 0) {
    for (let i = 0; i < n; i++, count++) {
      answer[++x][y] = count;
    }

    for (let i = 0; i < n - 1; i++, count++) {
      answer[x][++y] = count;
    }

    for (let i = 0; i < n - 2; i++, count++) {
      answer[--x][--y] = count;
    }

    n -= 3;
  }

  return answer.flat();
}
