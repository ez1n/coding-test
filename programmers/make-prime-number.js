/**
 * Lv.1 소수 만들기
 * 
 * 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
 * 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, 
 * nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
 * nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
 * 
 */

// 소수 구하기
function isPrimeNumber(number) {
  if (number > 1) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return;
    }
    return true;
  }
}

function solution(nums) {
  let answer = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrimeNumber(sum)) answer++;
      }
    }
  }

  return answer;
}

// 조합 배열 구하기
function getCombination(arr, num) {
  if (num === 1) return arr;

  let result = [];
  arr.forEach((ele, index, array) => {
    const rest = array.slice(index + 1);
    const combinations = getCombination(rest, num - 1);
    const attached = combinations.map(value => {
      return [ele, ...[].concat(value)];
    });
    result.push(...attached)
  });

  return result;
}

// 조합 배열 이용하여 구하기
function solution2(nums) {
  let answer = 0;
  const arr = getCombination(nums, 3);

  arr.map(item => {
    const sum = item.reduce((sum, value) => sum + value, 0);
    if (isPrimeNumber(sum)) answer++;
  })

  return answer;
}
