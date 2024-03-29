/**
 * Lv.2 구명보트
 * 
 * 무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
 * 
 * 구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
 * 
 * 사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 
 * 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.
 * 
 * 제한사항
 * 무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
 * 각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
 * 구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
 * 구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.
 * 
*/

function solution(people, limit) {
  let answer = 0;
  let p = people.sort((a, b) => b - a);

  let j = p.length - 1;
  for (let i = 0; i <= j; i++) {
    answer++;
    p[i] + p[j] <= limit && j--;
  }
  return answer;
}