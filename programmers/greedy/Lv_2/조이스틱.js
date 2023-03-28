/**
 * Lv.2 조이스틱
 * 
 * 조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
 * ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA
 * 
 * 만들고자 하는 이름 name이 매개변수로 주어질 때, 
 * 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.
 * 
 * 제한 사항
 * name은 알파벳 대문자로만 이루어져 있습니다.
 * name의 길이는 1 이상 20 이하입니다.
 * 
 */

function solution(name) {
  let count = 0;
  let moves = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let curNum = name.charCodeAt(i);

    if (curNum < 78) {
      count += curNum - 65;
    } else {
      count += 91 - curNum;
    }

    let index = i + 1;
    while (index < name.length && name[index] == 'A') index++;

    moves = Math.min(moves, (i * 2) + name.length - index);
    moves = Math.min(moves, (name.length - index) * 2 + i);
  }

  return count + moves;
}

