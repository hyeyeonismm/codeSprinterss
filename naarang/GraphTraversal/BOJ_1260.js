const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);
let graph = {};

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  graph[start] ? graph[start].push(end) : (graph[start] = [end]);
  graph[end] ? graph[end].push(start) : (graph[end] = [start]);
}

const dfs = (startNode) => {
  let visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length > 0) {
    const node = needVisit.pop();

    if (!visited.includes(node)) {
      visited.push(node);
      const childNode = graph[node]?.sort((a, b) => b - a) ?? []; // 작은 숫자부터 탐색

      needVisit = [...needVisit, ...childNode];
    }
  }

  return visited;
};

const bfs = (startNode) => {
  let visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length > 0) {
    const node = needVisit.shift();

    if (!visited.includes(node)) {
      visited.push(node);
      const childNode = graph[node]?.sort((a, b) => a - b) ?? []; // 작은 숫자부터 탐색

      needVisit = [...needVisit, ...childNode];
    }
  }

  return visited;
};

const dfsResult = dfs(V);
const bfsResult = bfs(V);
console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));

/*

오랜만에 DFS, BFS를 복습했다

DFS - 스택이용
BFS - 큐 이용

이때 주의할 조건은 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하기 위해 정렬을 하는데
DFS의 경우 스택이므로 내림차순 정렬, BFS는 오름차순 정렬해야했다!

*/
