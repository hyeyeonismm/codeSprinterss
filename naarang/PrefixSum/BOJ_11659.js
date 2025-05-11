const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);
let sum = new Array(N).fill(0);
sum[0] = nums[0];

for (let i = 1; i < nums.length; i++) {
  sum[i] = sum[i - 1] + nums[i];
}

let answer = [];
for (let i = 2; i < 2 + M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  // start === 1이면 조심!
  if (start === 1) answer.push(sum[end - 1]);
  else answer.push(sum[end - 1] - sum[start - 2]);
}

console.log(answer.join("\n"));

// 구간의합 -> prefix sum
