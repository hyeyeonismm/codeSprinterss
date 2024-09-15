const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);

let rootNode = 0;
const parentNodes = input[1].split(" ").map(Number);
const deletedNode = parseInt(input[2]);

let tree = {};
for (let i = 0; i < parentNodes.length; i++) {
  const parentNode = parentNodes[i];
  if (parentNode === -1) {
    rootNode = i;
    continue;
  }
  tree[parentNode] ? tree[parentNode].push(i) : (tree[parentNode] = [i]);
}

let answer = 0;
const BFS = (startNode) => {
  let visited = new Array(n).fill(false);
  let queue = [];

  queue.push(startNode);

  while (queue.length) {
    const node = queue.shift();
    if (!visited[node]) {
      // 삭제된 노드면 패스
      const childNodes = tree[node]?.filter((node) => node !== deletedNode);
      // 리프노드인가?
      if (childNodes?.length) {
        queue = [...queue, ...childNodes];
      } else {
        answer++;
      }
    }
  }
};

if (rootNode !== deletedNode) BFS(rootNode);

console.log(answer);
