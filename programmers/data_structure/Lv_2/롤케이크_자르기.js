/**
 * Lv.2 롤케이크 자르기
 *
 * 철수는 롤케이크를 두 조각으로 잘라서 동생과 한 조각씩 나눠 먹으려고 합니다.
 * 이 롤케이크에는 여러가지 토핑들이 일렬로 올려져 있습니다.
 * 철수와 동생은 롤케이크를 공평하게 나눠먹으려 하는데, 그들은 롤케이크의 크기보다 롤케이크 위에 올려진 토핑들의 종류에 더 관심이 많습니다.
 * 그래서 잘린 조각들의 크기와 올려진 토핑의 개수에 상관없이 각 조각에 동일한 가짓수의 토핑이 올라가면 공평하게 롤케이크가 나누어진 것으로 생각합니다.
 *
 * 롤케이크에 올려진 토핑들의 번호를 저장한 정수 배열 topping이 매개변수로 주어질 때,
 * 롤케이크를 공평하게 자르는 방법의 수를 return 하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 *
 * 1 ≤ topping의 길이 ≤ 1,000,000
 * 1 ≤ topping의 원소 ≤ 10,000
 *
 */

function solution(topping) {
  let answer = 0;
  let hashMap = new Map();

  for (let t of topping) {
    hashMap.set(t, (hashMap.get(t) || 0) + 1);
  }
  let typeNum = hashMap.size;

  let hashSet = new Set();
  while (hashSet.size <= typeNum) {
    const top = topping.pop();
    hashMap.set(top, hashMap.get(top) - 1);

    if (!hashMap.get(top)) typeNum--;

    if (!hashSet.has(top)) hashSet.add(top);

    if (hashSet.size === typeNum) answer++;
  }

  return answer;
}
