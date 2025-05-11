const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

let n = parseInt(input[0]);
let tree = {};
let answer = [];

for (let i = 1; i < n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  tree[a] ? tree[a].push(b) : (tree[a] = [b]);
  tree[b] ? tree[b].push(a) : (tree[b] = [a]);
}

for (let i = n + 1; i < input.length; i++) {
  const [t, k] = input[i].split(" ").map(Number);
  if (t === 1) {
    tree[k].length > 1 ? answer.push("yes") : answer.push("no");
    answer.push();
  } else if (t === 2) {
    answer.push("yes");
  }
}

console.log(answer.join("\n"));

// 이미 입력부터 트리가 성립하는 것이 포인트!
// 단절선과 단절점이라는 개념을 처음 알게 됨
/*
트리의 조건
트리(tree) : 사이클이 존재하지 않으며, 모든 정점이 연결되어 있는 그래프
-> 따라서 모든 간선은 단절선
-> 정점 중에서 연결된 노드가 2개 이상이면 단절점
*/
