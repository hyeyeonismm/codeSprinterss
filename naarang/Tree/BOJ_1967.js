const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = Number(input[0]);
let tree = {}; // key: node1, value: [node2, weight]

// 런타임 에러가 발생했는데 노드의 개수가 1개밖에 없을 때는 그냥 0을 바로 반환하는 것으로 수정!
if (n === 1) {
  console.log(0);
  return;
}

for (let i = 1; i < n; i++) {
  const [node1, node2, weight] = input[i].split(" ").map(Number);

  tree[node1] ? tree[node1].push([node2, weight]) : (tree[node1] = [[node2, weight]]);
  tree[node2] ? tree[node2].push([node1, weight]) : (tree[node2] = [[node1, weight]]);
}

// 가중치를 어떻게 계산해? 누적한 현재까지의 가중치를 스택에 넣으면서 계산
const dfs = (startNode) => {
  let visited = new Array(n + 1).fill(false);
  let stack = [];
  let maxDist = 0; // 최대 거리
  let maxNode = null; // 최대 거리일 때의 정점

  stack.push([startNode, 0]);

  while (stack.length) {
    const [node, currentWeight] = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      if (maxDist < currentWeight) {
        maxDist = currentWeight;
        maxNode = node;
      }

      tree[node].forEach((value) => {
        const [child, weight] = value;
        if (!visited[child]) stack.push([child, currentWeight + weight]);
      });
    }
  }
  return { maxDist, maxNode };
};

const max = dfs(1);
const answer = dfs(max.maxNode);

console.log(answer.maxDist);

// 처음에는 리프노드를 구해서 모든 경우의 수를 판단하려고 함
// 그러나 그게 아니라 트리의 지름을 푸는 방법은 DFS를 2번 또는 BFS를 2번 하면 된다!
/*
1. 임의의 정점 X에서 가장 먼 정점인 Y를 찾기
2. Y 부터 가장 먼 정점인 Z를 찾기
3. Y부터 Z까지의 경로가 트리의 지름이다.
증명은 나중에 정리하기
https://blog.myungwoo.kr/112

*/
