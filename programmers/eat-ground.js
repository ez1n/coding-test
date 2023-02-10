/**
 * Lv.2 땅따먹기
 *
 * 땅따먹기 게임을 하려고 합니다.
 * 땅따먹기 게임의 땅(land)은 총 N행 4열로 이루어져 있고, 모든 칸에는 점수가 쓰여 있습니다.
 * 1행부터 땅을 밟으며 한 행씩 내려올 때, 각 행의 4칸 중 한 칸만 밟으면서 내려와야 합니다.
 * 단, 땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.
 *
 * 마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 return하는 solution 함수를 완성해 주세요.
 *
 * 제한사항
 *
 * 행의 개수 N : 100,000 이하의 자연수
 * 열의 개수는 4개이고, 땅(land)은 2차원 배열로 주어집니다.
 * 점수 : 100 이하의 자연수
 *
 */

function solution(land) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      let max = 0;
      for (k = 0; k < land[i].length; k++) {
        const score = land[i][j] + land[i - 1][k];
        if (k !== j) {
          if (max < score) max = score;
        }
      }
      land[i][j] = max;
    }
  }
  return Math.max(...land[land.length - 1]);
}
