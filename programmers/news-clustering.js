/**
 * Lv.2 [1차] 뉴스 클러스터링
 * 
 * 유사한 기사를 묶는 기준을 정하기 위해서 논문과 자료를 조사하던 튜브는 "자카드 유사도"라는 방법을 찾아냈다.
 * 
 * 자카드 유사도는 집합 간의 유사도를 검사하는 여러 방법 중의 하나로 알려져 있다. 
 * 두 집합 A, B 사이의 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의된다.
 * 
 * 예를 들어 집합 A = {1, 2, 3}, 집합 B = {2, 3, 4}라고 할 때, 
 * 교집합 A ∩ B = {2, 3}, 합집합 A ∪ B = {1, 2, 3, 4}이 되므로, 집합 A, B 사이의 자카드 유사도 J(A, B) = 2/4 = 0.5가 된다. 
 * 집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 J(A, B) = 1로 정의한다.
 * 
 * 자카드 유사도는 원소의 중복을 허용하는 다중집합에 대해서 확장할 수 있다.
 * 
 * 입력 형식
 * 입력으로는 str1과 str2의 두 문자열이 들어온다. 
 * 각 문자열의 길이는 2 이상, 1,000 이하이다.
 * 입력으로 들어온 문자열은 두 글자씩 끊어서 다중집합의 원소로 만든다. 
 * 이때 영문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다. 
 * 다중집합 원소 사이를 비교할 때, 대문자와 소문자의 차이는 무시한다. "AB"와 "Ab", "ab"는 같은 원소로 취급한다.
 * 
 * 출력 형식
 * 입력으로 들어온 두 문자열의 자카드 유사도를 출력한다. 
 * 유사도 값은 0에서 1 사이의 실수이므로, 이를 다루기 쉽도록 65536을 곱한 후에 소수점 아래를 버리고 정수부만 출력한다.
 */

function j(text) {
  const pattern = /[A-Z]{2}/;
  let list = [];
  for (let i = 0; i < text.length - 1; i++) {
    const word = (text[i] + text[i + 1]).toUpperCase();
    pattern.test(word) && list.push(word);
  }
  return list;
}

function solution(str1, str2) {
  const arr1 = j(str1);
  const arr2 = j(str2);
  const set = new Set([...arr1, ...arr2]);

  if (arr1.length === 0 && arr2.length === 0) return 65536;

  let union = 0;
  let intersection = 0;
  set.forEach(item => {
    const len1 = arr1.filter(value => value === item).length;
    const len2 = arr2.filter(value => value === item).length;
    intersection += Math.min(len1, len2);
    union += Math.max(len1, len2);
  })

  return Math.floor((intersection / union) * 65536);
}

