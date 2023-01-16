/**
 * Lv.2 행렬의 곱셈
 * 
 * 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.
 * 
 * 제한 조건
 * 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
 * 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
 * 곱할 수 있는 배열만 주어집니다.
 * 
 */

function solution(arr1, arr2) {
  const answer = arr1.map(item => {
    let result = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let num = 0;
      for (let i = 0; i < item.length; i++) {
        num += item[i] * arr2[i][j]
      }
      result.push(num);
    }
    return result;
  })

  return answer;
}


/* map과 reduce 활용하기 */
function solution2(arr1, arr2) {
  return arr1.map(function (row) {
    return row.map(function (item, i) {
      return row.reduce(function (sum, value, j) {
        return sum + value * arr2[j][i];
      }, 0);
    });
  });
}