const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const nums = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = new Set();
let visited = new Array(N).fill(false);

const dfs = (prev, depth) => {
  if (depth === M) {
    answer.add(prev);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    dfs(`${prev} ${nums[i]}`, depth + 1);
    visited[i] = false;
  }
};

for (let i = 0; i < N; i++) {
  visited[i] = true;
  dfs(`${nums[i]}`, 1);
  visited[i] = false;
}

console.log(Array.from(answer).join("\n"));

// 시간 초과를 해결하기 위해 N이 작으므로 Set을 사용
/*

set을 배열로 전환하는 법

1. 

const set = new Set([1, 2, 3]);

const arr = Array.from(set);

2. 

const arr = [...set]

*/
