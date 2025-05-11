const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);

let cables = [];

for (let i = 1; i <= K; i++) {
  cables.push(Number(input[i]));
}

cables.sort((a, b) => a - b);

let max = Math.max(...cables);
let min = 1;

while (min <= max) {
  const mid = Math.floor((max + min) / 2);

  let count = 0;

  for (let cable of cables) {
    let num = Math.floor(cable / mid);
    count += num;
  }

  if (count >= N) {
    min = mid + 1;
  } else if (count < N) {
    max = mid - 1;
  }
}

console.log(max);

/*

이분 탐색으로 절반씩 쪼개가면서 계산하기

max에 저장된 값이 문제의 요구를 만족하는 가장 큰 길이임을 주의해야 함

*/
