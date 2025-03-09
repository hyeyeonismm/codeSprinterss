const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const edges = [];

for (let i = 1; i <= M; i++) {
  const [from, to, weight] = input[i].split(" ").map(Number);

  edges.push({ from, to, weight });
}

const dist = new Array(N + 1).fill(Infinity);
dist[1] = 0;

for (let i = 0; i < N - 1; i++) {
  for (const { from, to, weight } of edges) {
    dist[to] = Math.min(dist[to], dist[from] + weight);
  }
}

// 음의 가중치 사이클 확인 -> 무한히 시간을 돌릴 수 있음
for (const { from, to, weight } of edges) {
  if (dist[to] > dist[from] + weight) {
    console.log(-1);
    return;
  }
}

dist.shift();
dist.shift();

const answer = dist.map((value) => (value == Infinity ? -1 : value)).join("\n");

console.log(answer);

// 음의 가중치가 있으므로 벨만 포드 알고리즘 사용
