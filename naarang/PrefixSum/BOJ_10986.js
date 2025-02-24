const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);

let sums = new Array(N).fill(0);
sums[0] = nums[0];

for (let i = 1; i < N; i++) {
  sums[i] = sums[i - 1] + nums[i];
}
let remainders = new Array(M).fill(0); // 각각 나머지에 대한 개수

for (let i = 0; i < N; i++) {
  const remainder = sums[i] % M;
  remainders[remainder]++;
}

let answer = 0;

// nC2로 계산
for (const remainder of remainders) {
  if (remainder < 2) continue;

  const result = (remainder * (remainder - 1)) / 2;
  answer += result;
}

// sums[i] % M === 0이면 그 자체로도 가능!
answer += remainders[0];

console.log(answer);

/*

구간의 합 -> Prefix sum

2중 for문으로 가능한 모든 구간을 보면 시간 초과

다음의 규칙을 이용해야 함! 

세개의 수 a, b, c에 대해 a % c === b % c 이면 (a - b) % c로 나누어 떨어진다!


*/
