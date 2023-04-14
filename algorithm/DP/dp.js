/**
 * 동적 프로그래밍 (Dynamic Programming)
 *
 * 피보나치 수열
 */

// 재귀적 방법 (Recursion)
// Big O : O(2^n)
function fibRe(n) {
  if (n <= 0) return undefined;
  if (n <= 2) return 1;
  return fibRe(n - 1) + fibRe(n - 2);
}

console.log(fibRe(10)); // 55

// 동적 계획법 (DP)
// Big O : O(n)
function fibDP(n, memo = [0, 1, 1]) {
  if (n <= 0) return undefined;
  if (memo[n]) return memo[n];

  const result = fibDP(n - 1, memo) + fibDP(n - 2, memo);
  memo[n] = result;

  return result;
}

console.log(fibDP(10)); // 55
