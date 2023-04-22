/**
 * Lv.2 최댓값과 최솟값
 * 
 * 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
 * str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
 * 
 * 제한조건
 * s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
 */

function solution(s) {
    const list = s.split(" ");
    return [Math.min(...list), Math.max(...list)].join(" ");
}

