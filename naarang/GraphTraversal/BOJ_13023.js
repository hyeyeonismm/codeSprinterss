const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = {};

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  graph[start] ? graph[start].push(end) : (graph[start] = [end]);
  graph[end] ? graph[end].push(start) : (graph[end] = [start]);
}

const visited = new Array(N).fill(false);
let findAnswer = false;

const dfs = (student, depth) => {
  if (findAnswer) return;

  if (depth >= 5) {
    findAnswer = true;
    return;
  }

  visited[student] = true;

  const children = graph[student] ?? [];

  for (let child of children) {
    if (!visited[child]) dfs(child, depth + 1);
  }

  visited[student] = false; // 방문 체크 해재!
};

for (let i = 0; i < N; i++) {
  dfs(i, 1);
}

console.log(findAnswer ? 1 : 0);

/*

처음에 dfs를 stack으로 구현했는데 이게 아니라 재귀함수로 구현해서 

탐색할 때 방문체크하고 재귀함수를 빠져나오면 방문제크를 해제해야 함! -> 다른 경로로 같은 노드를 탐색해야하기 때문에

*/
