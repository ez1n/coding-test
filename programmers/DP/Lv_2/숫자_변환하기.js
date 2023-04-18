/**
 * LV.2 숫자 변환하기
 *
 * 자연수 x를 y로 변환하려고 합니다.
 * 사용할 수 있는 연산은 다음과 같습니다.
 *
 * x에 n을 더합니다
 * x에 2를 곱합니다.
 * x에 3을 곱합니다.
 *
 * 자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요.
 * 이때 x를 y로 만들 수 없다면 -1을 return 해주세요.
 *
 * 제한사항
 *
 * 1 ≤ x ≤ y ≤ 1,000,000
 * 1 ≤ n < y
 *
 */

function solution(x, y, n) {
  let dp = new Array(y + 1).fill(-1);
  let i = x;
  dp[i] = 0;

  while (i <= y) {
    if (dp[i] === -1) {
      i++;
      continue;
    }

    if (i + n <= y) {
      if (dp[i + n] === -1) dp[i + n] = dp[i] + 1;
      else dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    }

    if (i * 2 <= y) {
      if (dp[i * 2] === -1) dp[i * 2] = dp[i] + 1;
      else dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    }

    if (i * 3 <= y) {
      if (dp[i * 3] === -1) dp[i * 3] = dp[i] + 1;
      else dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    }

    i++;
  }

  return dp[y];
}
