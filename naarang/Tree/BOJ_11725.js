const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

let n = parseInt(input[0]);
let tree = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i < n; i++) {
  let [node1, node2] = input[i].split(" ").map(Number);
  tree[node1].push(node2);
  tree[node2].push(node1);
}

// 이제 각 노드별 부모 노드 찾기
let parents = new Array(n + 1).fill(0);

// BFS라면?
const BFS = (startNode) => {
  let visited = new Array(n + 1).fill(false);
  let queue = [];

  const checkChildren = (parent, children) => {
    children.forEach((child) => {
      if (!visited[child]) {
        parents[child] = parent;
        queue.push(child);
      }
    });
  };

  queue.push(startNode);

  while (queue.length) {
    const node = queue.shift();
    if (!visited[node]) {
      visited[node] = true;
      // queue = [...queue, ...tree[node]];
      // 아직 방문하지 않은 노드들이 자식 노드
      checkChildren(node, tree[node]);
    }
  }
};

BFS(1);
console.log(parents.slice(2).join("\n"));

// 이때 DFS를 쓸까? BFS를 쓸까?
// bfs로 했는데 메모리 초과 뜸.....

// BFS에서 현재 노드에서 갈 수 있는 노드들을 큐에 추가할 때 가보지 않은 노드들이 자식 노드다!

/*
메모리 초과 해결 방법

개선 전
: 자식은 별도로 따로 구해서 parents에 넣어주고 그냥 tree[node]를 다 queue에 넣었음
const checkChildren = (parent, children) => {
    children.forEach((child) => {
      if (!visited[child]) parents[child] = parent;
    });
  };

  while (queue.length) {
    const node = queue.shift();
    if (!visited[node]) {
      visited[node] = true;
      queue = [...queue, ...tree[node]]; // tree[node]를 다 queue에 넣음
      checkChildren(node, tree[node]);
    }
  }


개선 후
: 자식들만 계산해서 queue에 넣어주는 것으로 변경
const checkChildren = (parent, children) => {
    children.forEach((child) => {
      if (!visited[child]) {
        parents[child] = parent;
        queue.push(child);
      }
    });
  };

*/
