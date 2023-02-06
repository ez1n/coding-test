/**
 * Lv.1 둘 만의 암호
 *
 * 두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다.
 * 암호의 규칙은 다음과 같습니다.
 *
 * 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
 * index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
 * skip에 있는 알파벳은 제외하고 건너뜁니다.
 *
 * 두 문자열 s와 skip, 그리고 자연수 index가 매개변수로 주어질 때
 * 위 규칙대로 s를 변환한 결과를 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 *
 * 5 ≤ s의 길이 ≤ 50
 * 1 ≤ skip의 길이 ≤ 10
 * s와 skip은 알파벳 소문자로만 이루어져 있습니다.
 *  skip에 포함되는 알파벳은 s에 포함되지 않습니다.
 * 1 ≤ index ≤ 20
 *
 */

function solution(s, skip, index) {
  let result = "";
  let n = s.length;
  let skipStr = [];

  for (i = 0; i < skip.length; i++) {
    skipStr.push(skip.charCodeAt(i));
  }

  for (let i = 0; i < n; i++) {
    let code = s.charCodeAt(i);
    for (let j = index; j > 0; j--) {
      code === 122 ? (code = 97) : code++;
      if (skipStr.includes(code)) j++;
    }

    result += String.fromCharCode(code);
  }
  return result;
}
