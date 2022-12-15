/**
 * Lv.2 카펫
 * 
 * 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 
 * 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 * 
 * 제한사항
 * 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
 * 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
 * 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
 * 
 */

function solution(brown, yellow) {
  let answer = [];
  sum = brown + yellow;

  for (let h = 3; h < brown; h++) {
    const w = sum / h;
    if (sum % h === 0 && h <= w) {
      (h - 2) * (w - 2) === yellow && answer.push(w, h);
    }
  }
  return answer;
}