const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let schedules = [];

for (let i = 1; i <= N; i++) {
  const [T, P] = input[i].split(" ").map(Number);
  schedules.push([T, P]);
}

let dp = new Array(N + 1).fill(0);

// 1일차
const [T1, P1] = schedules[0];
if (T1 === 1) dp[1] = P1;

// 2일차 ~
for (let i = 2; i <= N; i++) {
  // i일차
  let dayi = 0;
  const [Ti, Pi] = schedules[i - 1];
  if (Ti === 1) dayi = Pi;

  dp[i] = dp[i - 1] + dayi;

  // 앞쪽에서 새롭게 가능해진값 있는지 찾기
  for (let j = i - 1; j > 0; j--) {
    const [Tj, Pj] = schedules[j - 1];

    if (i - j + 1 === Tj) {
      dp[i] = Math.max(dp[i], dp[j - 1] + Pj);
    }
  }
}

console.log(dp[N]);

/*

DP와 BruteForce로 각각으로 풀어보기

1) DP

훨씬 효율적

2) BruteForce

: 해당 상담을 할 경우와 아닌 경우 모두 탐색하면 됨

N의 크기가 작기 때문에 가능한 것 같은데... 크면 DP가 맞는듯!



*/
