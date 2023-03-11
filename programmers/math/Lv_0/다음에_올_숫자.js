/**
 * Lv_0 다음에 올 숫자
 *
 * 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
 *
 * 제한사항
 *
 * 2 < common의 길이 < 1,000
 * -1,000 < common의 원소 < 2,000
 *  common의 원소는 모두 정수입니다.
 * 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
 * 등비수열인 경우 공비는 0이 아닌 정수입니다.
 *
 */

function geometric(a1, r, n) {
  return a1 * r ** (n - 1);
}

function solution(common) {
  let n = common.length,
    a1 = common[0],
    d = common[1] - common[0],
    r = common[1] / common[0];

  return geometric(a1, r, 3) === common[2]
    ? geometric(a1, r, n + 1)
    : a1 + n * d;
}
