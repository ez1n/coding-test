/**
 * Lv.3 최고의 집합
 * 
 * 자연수 n 개로 이루어진 중복 집합(multi set, 편의상 이후에는 "집합"으로 통칭) 중에 다음 두 조건을 만족하는 집합을 최고의 집합이라고 합니다.
 * 
 * 1. 각 원소의 합이 S가 되는 수의 집합
 * 2. 위 조건을 만족하면서 각 원소의 곱 이 최대가 되는 집합
 * 
 * 집합의 원소의 개수 n과 모든 원소들의 합 s가 매개변수로 주어질 때, 최고의 집합을 return 하는 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 
 * 최고의 집합은 오름차순으로 정렬된 1차원 배열(list, vector) 로 return 해주세요.
 * 만약 최고의 집합이 존재하지 않는 경우에 크기가 1인 1차원 배열(list, vector) 에 -1 을 채워서 return 해주세요.
 * 자연수의 개수 n은 1 이상 10,000 이하의 자연수입니다.
 * 모든 원소들의 합 s는 1 이상, 100,000,000 이하의 자연수입니다.
 * 
 */

function solution(n, s) {
  let answer = [];

  if (s < n) return [-1];

  for (let i = n; i > 0; i--) {
    const num = Math.floor(s / i);
    answer.push(num);
    s -= num;
  }

  return answer.sort();
}
