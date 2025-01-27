const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const N = parseInt(input[0]);
const requests = input[1].split(" ").map(Number);
const total = parseInt(input[2]);

let max = Math.max(...requests);
let min = 1;

// 1. 모든 요청이 배정될 수 있는 경우에는 요청한 금액을 그대로 배정
const sum = requests.reduce((prev, value) => prev + value, 0);
if (sum <= total) {
  console.log(max);
  return;
}

// 2. 모든 요청이 배정될 수 없는 경우에는 특정한 정수 상한액을 계산
while (min <= max) {
  const mid = Math.floor((max + min) / 2);

  let currentSum = 0;
  requests.forEach((value) => {
    if (value <= mid) {
      currentSum += value;
    } else {
      currentSum += mid;
    }
  });

  if (currentSum > total) {
    max = mid - 1;
  } else {
    min = mid + 1;
  }
}

console.log(max);

/*

특정 범위에서 가능한 한 최대 또는 최소를 계산할 때도 많이 사용되는 듯!

조건에 따라 min 또는 max를 조정:

currentSum > total → 예산 초과: 상한액이 너무 큼 → max = mid - 1
currentSum <= total → 예산 이하: 상한액이 작거나 적절함 → min = mid + 1

최종적으로 max를 반환하는 이유
이진 탐색은 min이 max보다 커질 때 종료합니다. 이 과정에서:

1. max는 항상 예산(total)을 초과하지 않는 범위에서 유지됩니다.
2. min은 상한액을 더 크게 만들어보려는 시도를 하며 증가합니다.
3. 탐색 종료 시점에서 min은 적정 상한액을 초과한 상태가 되고, max는 조건을 만족하는 최대 상한액이 됩니다.

*/
