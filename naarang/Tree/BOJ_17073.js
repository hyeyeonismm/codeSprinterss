const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [N, W] = input[0].split(" ").map(Number);
let tree = {};

for (let i = 1; i < input.length; i++) {
  const [U, V] = input[i].split(" ").map(Number);

  tree[U] ? tree[U].push(V) : (tree[U] = [V]);
  tree[V] ? tree[V].push(U) : (tree[V] = [U]);
}

// 근데 이거는 그냥 W / 리프 노드의 개수 아닌가?
let leafNodeNum = 0;
// 리프 노드의 개수 구하기 -> 리프 노드는 갈 수 있는 곳이 단 1개인 경우(부모)
// 개선 후
const nodes = Object.keys(tree);
// dictionary의 key값은 string이므로 주의하자!
nodes.forEach((node) => {
  if (tree[node].length === 1 && node !== "1") leafNodeNum++;
});

/* 개선 전!
const bfs = (rootNode) => {
  let visited = new Array(N + 1).fill(false);
  let queue = [];

  queue.push(rootNode);

  while (queue.length > 0) {
    const node = queue.shift();
    if (!visited[node]) {
      visited[node] = true;

      const children = tree[node].filter((child) => !visited[child]);
      if (children.length) {
        queue.push(...children);
      } else {
        leafNodeNum++;
      }
    }
  }
};

bfs(1);
*/

console.log(W / leafNodeNum);

// 시간 초과 발생...
// 리프 노드 찾는 방법 개선 : BFS로 찾기 -> 갈 수 있는 노드가 1개인 경우만 찾기
