/**
 * 문자열 탐색 (String Search)
 */

// Naive Search
function naiveSearch(str, target) {
  const n = target.length;
  let count = 0;

  for (let i = 0; i < str.length - n + 1; i++) {
    for (let j = 0; j < n; j++) {
      if (str[i + j] !== target[j]) break;
      if (j === n - 1) count++;
    }
  }

  return count;
}
