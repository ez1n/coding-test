/**
 * 동적 프로그래밍 (Dynamic Programming)
 * Memoization, Tabulation
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

// Memoization
// Big O : O(n)
function fibMemo(n, memo = [0, 1, 1]) {
  if (n <= 0) return undefined;
  if (memo[n]) return memo[n];

  const result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = result;

  return result;
}

console.log(fibMemo(10)); // 55

// Tabulation
function fibTab(n) {
  if (n < 0) return undefined;
  if (n <= 2) return 1;
  let fibNum = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibNum[i] = fibNum[i - 1] + fibNum[i - 2];
  }

  return fibNum[n];
}

console.log(fibMemo(10)); // 55
