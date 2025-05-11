const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

// 전위 순회이므로 탐색하면서 트리에 삽입하는 것으로 구현
let tree = {}; // key - 부모, value - [왼쪽 자식, 오른쪽 자식]

const rootNode = input[0];
tree[rootNode] = [null, null]; // 루트 노드

const insertNode = (node) => {
  let startNode = rootNode;

  while (true) {
    const [left, right] = tree[startNode];
    if (Number(startNode) > Number(node)) {
      if (!left) {
        tree[startNode][0] = node;
        break;
      } else {
        startNode = left;
      }
    } else {
      if (!right) {
        tree[startNode][1] = node;
        break;
      } else {
        startNode = right;
      }
    }
  }
};

for (let i = 1; i < input.length; i++) {
  const node = input[i];
  if (!tree[node]) {
    tree[node] = [null, null];
  }
  insertNode(node);
}

let answer = [];
const dfs = (startNode) => {
  const [left, right] = tree[startNode];

  left && dfs(left);
  right && dfs(right);
  answer.push(startNode);
};

dfs(rootNode);
console.log(answer.join("\n"));

// 이 문제는 BST(이진탐색트리)의 구현으로 풀 수 있는 문제였다!
// https://blog.naver.com/dlaxodud2388/222647619781
