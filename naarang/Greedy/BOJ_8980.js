const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [n, c] = input[0].split(" ").map(Number);
const m = Number(input[1]);

const boxes = [];
for (let i = 2; i <= m + 1; i++) {
  let [from, to, box] = input[i].split(" ").map(Number);

  boxes.push({ from, to, box });
}

boxes.sort((a, b) => (a.to === b.to ? a.from - b.from : a.to - b.to));

let answer = 0;
let truckLoad = Array(n + 1).fill(0); // 각 마을에 트럭이 얼마나 싣고 있는지 기록

for (const { from, to, box } of boxes) {
  let maxLoad = box;

  // 최대한 싣고 갈 수 있는 양을 결정하기
  for (let i = from; i < to; i++) {
    maxLoad = Math.min(maxLoad, c - truckLoad[i]);
  }

  // 해당 박스를 배달하는 구간에 박스 개수를 추가
  for (let i = from; i < to; i++) {
    truckLoad[i] += maxLoad;
  }

  answer += maxLoad; // 싣은 박스 개수를 추가
}

console.log(answer);

/* 용량이 제한 되어 있으므로
특정장소에 도착했을 때 최대한 빨리 내리는 것 중에 최대한으로 가져오면 어떨까!
*/

/*
이게 아니라 상자가 내리는 시기가 빠른 순으로 전체 정렬한 다음에 박스를 실어야 할듯! 만약 도착 마을이 같으면 시작 마을이 빠른 순으로 정렬하기!
*/

// 최대한 실고 갈 수 있는 만큼의 박스를 계산하는 것이 제일 어려웠다ㅠㅠㅠㅠ
