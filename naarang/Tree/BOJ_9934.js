const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const k = Number(input[0]);
const nodeList = input[1].split(" ").map(Number);
const tree = new Array(2 ** k).fill(null);
let count = 0;

// 완전이진트리 - 깊이가 K인 완전 이진 트리는 총 2^K - 1개의 노드를 가짐
// 입력값 - 중위순회값
// 중위순회값으로 트리를 어떻게 만들어? -> 진짜로 이진트리를 탐색하면서 채워가기

const dfs = (parentIndex) => {
  if (parentIndex >= 2 ** k) return;

  dfs(parentIndex * 2);
  tree[parentIndex] = nodeList[count++];
  dfs(parentIndex * 2 + 1);
};

dfs(1);

// depth 별로 나누기 -> 2의 배수만큼 끊으면 된다!
let answer = Array.from({ length: k }, () => []);
const checkDepth = () => {
  let depth = 0;
  let findIndex = 1;
  while (findIndex < 2 ** k) {
    answer[depth].push(tree[findIndex++]);
    if (2 ** depth <= answer[depth].length) depth++;
  }
};
checkDepth();

console.log(answer.map((depth) => depth.join(" ")).join("\n"));
