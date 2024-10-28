const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);
const k = parseInt(input[1]);
const sensors = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let distance = [];

for (let i = 0; i < n - 1; i++) {
  // {index: x, distance: x + 1과 x번째 센서의 거리 차}
  distance.push({ index: i, distance: sensors[i + 1] - sensors[i] });
}

distance.sort((a, b) => b.distance - a.distance); // 거리차가 큰 순!

let spots = [...distance.slice(0, k - 1)].sort((a, b) => a.index - b.index); // 구간 나누기
spots.unshift({ index: -1 }); // 첫번째
spots.push({ index: n - 1 }); // 마지막도 추가하기! 경계이므로

let answer = 0;
for (let i = 0; i < spots.length - 1; i++) {
  answer += sensors[spots[i + 1].index] - sensors[spots[i].index + 1];
}

console.log(answer);

// 문제 이해가 힘들었다..
// 집중국은 특정 위치가 아니라 영역! -> 거리 격차가 큰 순으로 나누어야 함!
