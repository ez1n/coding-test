/**
 * Lv.2 큰 수 만들기 (Greedy)
 * 
 * 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.
 * 
 * 문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다.
 * number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.
 * 
 * 제한 조건
 * number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
 * k는 1 이상 number의 자릿수 미만인 자연수입니다.
 * 
 */

function solution(number, k) {
  let answer = '';
  let count = k;
  let stack = [number[0]];

  for (let i = 1; i < number.length; i++) {
    count === 0 && stack.push(number[i]);

    for (let j = stack.length - 1; j >= 0; j--) {
      if (count === 0) break;
      if (stack[j] < number[i]) {
        stack.pop();
        count--;
        (j === 0 || count === 0) && stack.push(number[i])
      } else {
        stack.push(number[i]);
        break;
      }
    }
  }

  for (let num of stack.slice(0, stack.length - count)) {
    answer += num;
  }
  return answer;
}

