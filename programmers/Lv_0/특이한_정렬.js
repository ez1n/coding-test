/**
 * Lv.0 특이한 정렬
 *
 * 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다.
 * 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다.
 * 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 *
 * 1 ≤ n ≤ 10,000
 * 1 ≤ numlist의 원소 ≤ 10,000
 * 1 ≤ numlist의 길이 ≤ 100
 * numlist는 중복된 원소를 갖지 않습니다.
 *
 */

function solution(numlist, n) {
  numlist.sort((a, b) => {
    const A = Math.abs(n - a);
    const B = Math.abs(n - b);

    if (B - A < 0) return 1;
    if (B - A > 0) return -1;
    return b - a;
  });

  return numlist;
}
