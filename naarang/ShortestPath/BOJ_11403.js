const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const N = parseInt(input[0]);

let graph = [];
let dist = Array.from({ length: N }, () => new Array(N).fill(Infinity));

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);
  graph.push(line);
}

for (let from = 0; from < N; from++) {
  for (let to = 0; to < N; to++) {
    if (from === to) dist[from][to] = 1;
    dist[from][to] = graph[from][to];
  }
}

for (let mid = 0; mid < N; mid++) {
  for (let from = 0; from < N; from++) {
    for (let to = 0; to < N; to++) {
      if (dist[from][mid] && dist[mid][to]) dist[from][to] = 1;
    }
  }
}

console.log(dist.map((value) => value.join(" ")).join("\n"));

// 모든 간선 간의 경로를 고려해야하므로 플로이드 워셜 알고리즘을 이용!
