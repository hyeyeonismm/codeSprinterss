const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let answer = [];

const dfs = (prev, depth) => {
  if (depth === M) {
    answer.push(prev);
    return;
  }

  for (let i = 1; i <= N; i++) {
    dfs(`${prev} ${i}`, depth + 1);
  }
};

for (let i = 1; i <= N; i++) {
  dfs(`${i}`, 1);
}

console.log(answer.join("\n"));
