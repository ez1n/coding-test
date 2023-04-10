/**
 * Lv.2 택배 배달과 수거하기
 *
 * 당신은 일렬로 나열된 n개의 집에 택배를 배달하려 합니다.
 * 배달할 물건은 모두 크기가 같은 재활용 택배 상자에 담아 배달하며, 배달을 다니면서 빈 재활용 택배 상자들을 수거하려 합니다.
 *
 * 배달할 택배들은 모두 재활용 택배 상자에 담겨서 물류창고에 보관되어 있고, i번째 집은 물류창고에서 거리 i만큼 떨어져 있습니다.
 * 또한 i번째 집은 j번째 집과 거리 j - i만큼 떨어져 있습니다. (1 ≤ i ≤ j ≤ n)
 * 트럭에는 재활용 택배 상자를 최대 cap개 실을 수 있습니다.
 * 트럭은 배달할 재활용 택배 상자들을 실어 물류창고에서 출발해 각 집에 배달하면서, 빈 재활용 택배 상자들을 수거해 물류창고에 내립니다.
 *
 * 각 집마다 배달할 재활용 택배 상자의 개수와 수거할 빈 재활용 택배 상자의 개수를 알고 있을 때,
 * 트럭 하나로 모든 배달과 수거를 마치고 물류창고까지 돌아올 수 있는 최소 이동 거리를 구하려 합니다. 각 집에 배달 및 수거할 때, 원하는 개수만큼 택배를 배달 및 수거할 수 있습니다.
 *
 * 트럭에 실을 수 있는 재활용 택배 상자의 최대 개수를 나타내는 정수 cap, 배달할 집의 개수를 나타내는 정수 n,
 * 각 집에 배달할 재활용 택배 상자의 개수를 담은 1차원 정수 배열 deliveries와 각 집에서 수거할 빈 재활용 택배 상자의 개수를 담은 1차원 정수 배열 pickups가 매개변수로 주어집니다.
 *
 * 이때, 트럭 하나로 모든 배달과 수거를 마치고 물류창고까지 돌아올 수 있는 최소 이동 거리를 return 하도록 solution 함수를 완성해 주세요.
 *
 * 제한사항
 *
 * 1 ≤ cap ≤ 50
 * 1 ≤ n ≤ 100,000
 * deliveries의 길이 = pickups의 길이 = n
 *  deliveries[i]는 i+1번째 집에 배달할 재활용 택배 상자의 개수를 나타냅니다.
 *  pickups[i]는 i+1번째 집에서 수거할 빈 재활용 택배 상자의 개수를 나타냅니다.
 *  0 ≤ deliveries의 원소 ≤ 50
 *  0 ≤ pickups의 원소 ≤ 50
 * 트럭의 초기 위치는 물류창고입니다.
 *
 */

function solution(cap, n, deliveries, pickups) {
  let count = 0;
  let [indexD, indexP] = [n - 1, n - 1];

  while (deliveries.length > 0 || pickups.length > 0) {
    let deliver = 0;
    let pickup = 0;

    for (let i = deliveries.length - 1; i >= 0; i--) {
      if (deliveries[i]) {
        break;
      }
      deliveries.pop();
      indexD--;
    }

    for (let i = pickups.length - 1; i >= 0; i--) {
      if (pickups[i]) {
        break;
      }
      pickups.pop();
      indexP--;
    }

    let d = indexD;
    while (deliver < cap && d > -1) {
      if (deliveries[d] > 0) {
        deliveries[d]--;
        deliver++;
      } else {
        d--;
      }
    }

    let p = indexP;
    while (pickup < cap && p > -1) {
      if (pickups[p] > 0) {
        pickups[p]--;
        pickup++;
      } else {
        p--;
      }
    }

    count += Math.max(indexD + 1, indexP + 1);
  }

  return count * 2;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0])); // 16
// console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0])); // 30
// console.log(solution(3, 6, [1, 0, 0, 2, 4, 5], [2, 0, 1, 4, 3, 0])); // 64
