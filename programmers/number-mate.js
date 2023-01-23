/**
 * Lv.1 숫자 짝꿍
 * 
 * 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다
 * (단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). 
 * X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. 
 * X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.
 * 
 * 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.
 * 
 * 제한사항
 * 
 * 3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.
 * X, Y는 0으로 시작하지 않습니다.
 * X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.
 * 
 */

function solution(X, Y) {
  let hashX = new Array(10).fill(0);
  let hashY = new Array(10).fill(0);

  X.split("").forEach(i => hashX[i]++);
  Y.split("").forEach(i => hashY[i]++);

  const answer = hashX.reduce((result, item, index) => {
    if (item > 0 && hashY[index] > 0) {
      const str = index.toString().repeat(Math.min(item, hashY[index]));
      return result.concat(str);
    }
    return result;
  }, []);
  const result = answer.reverse().join("");

  if (result === '') return "-1";
  if (result[0] === "0") return "0";
  return result;
}
