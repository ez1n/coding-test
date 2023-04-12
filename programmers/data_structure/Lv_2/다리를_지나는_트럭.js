/**
 * Lv.2 다리를 지나는 트럭
 *
 * 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다.
 * 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다.
 * 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다.
 * 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
 *
 * solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다.
 * 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.
 *
 * 제한 조건
 *
 * bridge_length는 1 이상 10,000 이하입니다.
 * weight는 1 이상 10,000 이하입니다.
 * truck_weights의 길이는 1 이상 10,000 이하입니다.
 * 모든 트럭의 무게는 1 이상 weight 이하입니다.
 *
 */

function solution(bridge_length, weight, truck_weights) {
  const n = truck_weights.length;
  let location = Array.from({ length: truck_weights.length }, () => 0);
  let queue = [];
  let index = [];
  let second = 0;

  let totalWeight = truck_weights.shift();
  queue.push(totalWeight);
  index.push(0);
  while (queue.length) {
    index.forEach((i) => location[i]++);
    second++;

    if (location[index[0]] > bridge_length) {
      index.shift();
      totalWeight -= queue.shift();
    }

    if (
      totalWeight + truck_weights[0] <= weight &&
      queue.length < bridge_length
    ) {
      const i = n - truck_weights.length;
      queue.push(truck_weights.shift());
      index.push(i);
      totalWeight += queue.at(-1);
      location[i]++;
    }
  }
  return second;
}

// 시간 효율성이 더 안좋음 왜지?
function solution(bridge_length, weight, truck_weights) {
  let queue = [];
  let second = 0;

  let totalWeight = truck_weights.shift();
  queue.push([totalWeight, 0]);

  while (queue.length) {
    queue = queue.map(([w, t]) => [w, t + 1]);
    second++;

    if (queue[0][1] > bridge_length) {
      const truck = queue.shift();
      totalWeight -= truck[0];
    }

    if (
      totalWeight + truck_weights[0] <= weight &&
      queue.length < bridge_length
    ) {
      const w = truck_weights.shift();
      queue.push([w, 1]);
      totalWeight += w;
    }
  }

  return second;
}
