const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

let answer = ["", "", ""]; // [전위순회, 중위순회, 후위순회 결과]
const N = Number(input.shift());
let tree = {};
// 트리 저장을 어떻게 할까? Key - 부모노드, value - [왼쪽 자식노드, 오른쪽 자식 노드]
const makeTree = (value) => {
  const [parent, left, right] = value.split(" ");

  const leftNode = left === "." ? null : left;
  const rightNode = right === "." ? null : right;

  tree[parent] = [leftNode, rightNode];
};

input.forEach((value) => makeTree(value));

const DFS = (parentNode) => {
  if (!tree[parentNode]) return;

  answer[0] += parentNode;
  DFS(tree[parentNode][0]);
  answer[1] += parentNode;
  DFS(tree[parentNode][1]);
  answer[2] += parentNode;
};

DFS("A");
console.log(answer.join("\n"));
