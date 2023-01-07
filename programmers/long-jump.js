/**
 * Lv.2 멀리 뛰기
 * 
 * 효진이는 멀리 뛰기를 연습하고 있습니다. 
 * 효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다.
 * 
 * 멀리뛰기에 사용될 칸의 수 n이 주어질 때, 
 * 효진이가 끝에 도달하는 방법이 몇 가지인지 알아내, 여기에 1234567를 나눈 나머지를 리턴하는 함수, solution을 완성하세요. 
 * 
 * 제한 사항
 * n은 1 이상, 2000 이하인 정수입니다.
 * 
 */

function solution(n) {
  let answer = 1;
  let before = 1;

  for (let i = 1; i < n; i++) {
    answer += before;
    before = answer - before;
    answer = answer % 1234567;
  }
  answer = answer % 1234567;
  return answer;
}


// 동적 계획법 (Dynamic Programming)

function solution(n) {
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] % 1234567;
  }

  return dp[n] % 1234567;
}

