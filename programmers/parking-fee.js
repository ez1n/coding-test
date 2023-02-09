/**
 * Lv.2 주차 요금 계산
 *
 * 주차장의 요금표와 차량이 들어오고(입차) 나간(출차) 기록이 주어졌을 때, 차량별로 주차 요금을 계산하려고 합니다.
 *
 * 주차 요금을 나타내는 정수 배열 fees, 자동차의 입/출차 내역을 나타내는 문자열 배열 records가 매개변수로 주어집니다.
 * 차량 번호가 작은 자동차부터 청구할 주차 요금을 차례대로 정수 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 *
 * fees의 길이 = 4
 *  fees[0] = 기본 시간(분)
 *  1 ≤ fees[0] ≤ 1,439
 *  fees[1] = 기본 요금(원)
 *  0 ≤ fees[1] ≤ 100,000
 *  fees[2] = 단위 시간(분)
 *  1 ≤ fees[2] ≤ 1,439
 *  fees[3] = 단위 요금(원)
 *  1 ≤ fees[3] ≤ 10,000
 * 1 ≤ records의 길이 ≤ 1,000
 *  records의 각 원소는 "시각 차량번호 내역" 형식의 문자열입니다.
 *  시각, 차량번호, 내역은 하나의 공백으로 구분되어 있습니다.
 *  시각은 차량이 입차되거나 출차된 시각을 나타내며, HH:MM 형식의 길이 5인 문자열입니다.
 *    HH:MM은 00:00부터 23:59까지 주어집니다.
 *    잘못된 시각("25:22", "09:65" 등)은 입력으로 주어지지 않습니다.
 *  차량번호는 자동차를 구분하기 위한, `0'~'9'로 구성된 길이 4인 문자열입니다.
 *  내역은 길이 2 또는 3인 문자열로, IN 또는 OUT입니다. IN은 입차를, OUT은 출차를 의미합니다.
 *  records의 원소들은 시각을 기준으로 오름차순으로 정렬되어 주어집니다.
 *  records는 하루 동안의 입/출차된 기록만 담고 있으며, 입차된 차량이 다음날 출차되는 경우는 입력으로 주어지지 않습니다.
 *  같은 시각에, 같은 차량번호의 내역이 2번 이상 나타내지 않습니다.
 * 마지막 시각(23:59)에 입차되는 경우는 입력으로 주어지지 않습니다.
 * 아래의 예를 포함하여, 잘못된 입력은 주어지지 않습니다.
 *  주차장에 없는 차량이 출차되는 경우
 *  주차장에 이미 있는 차량(차량번호가 같은 차량)이 다시 입차되는 경우
 *
 */

function solution(fees, records) {
  const [basicT, basicF, unitT, unitF] = fees;
  const lastTime = 23 * 60 + 59;
  let parking = new Map();
  let parkingTime = new Map();

  records.forEach((record) => {
    let [time, number, status] = record.split(" ");
    let [hour, minutes] = time.split(":").map(Number);
    time = hour * 60 + minutes;
    if (status === "IN") {
      parking.set(number, time);
      return;
    }
    const stayed = time - parking.get(number);
    parkingTime.set(number, (parkingTime.get(number) | 0) + stayed);
    parking.delete(number);
  });

  parking.forEach((value, key) => {
    parkingTime.set(key, (parkingTime.get(key) | 0) + lastTime - value);
  });

  return Array.from(parkingTime)
    .sort((a, b) => a[0] - b[0])
    .map((value) => {
      if (value[1] <= basicT) {
        return basicF;
      }
      return basicF + Math.ceil((value[1] - basicT) / unitT) * unitF;
    });
}
