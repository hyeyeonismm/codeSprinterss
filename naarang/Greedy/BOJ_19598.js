const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);
const time = [];

for (let i = 1; i <= n; i++) {
  const [startTime, endTime] = input[i].split(" ").map(Number);
  time.push({ isStart: true, time: startTime });
  time.push({ isStart: false, time: endTime });
}

time.sort((a, b) => {
  if (a.time === b.time) {
    return a.isStart - b.isStart;
  }
  return a.time - b.time;
});

let answer = 0; // currentNum의 최대값
let currentNum = 0;
time.forEach(({ isStart, time }) => {
  if (isStart) {
    currentNum++;
    answer = Math.max(answer, currentNum);
  } else {
    currentNum--;
  }
});

console.log(answer);

// 시작 시간 기준으로 정렬 -> 가장 많이 겹치는 시간대를 고르면 된다!
// 지난번에 푼 강의실 배정 문제랑 똑같이 풀리는 거라서 복습하는 겸 쉽게 풀 수 있었다
