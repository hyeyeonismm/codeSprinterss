const fs = require("fs");
let input = fs
  .readFileSync("naarang/input.txt")
  .toString()
  .trim()
  .split(/\s+|\n/);

let testCases = input.map(Number); // 그냥 아예 숫자 1차원 배열로 쭉 펼쳐버리기

let answer = [];
let tree = {}; // 트리의 간선
let nodes = new Set(); // 트리의 노드
let k = 1;

// tree인지 확인하기
const checkTree = () => {
  const nodeNum = nodes.size;
  // 아무것도 없는 트리도 트리
  if (nodeNum === 0) return true;

  // 루트노드 1개 + 들어오는 간선 1개
  const children = Object.keys(tree);
  if (children.length !== nodeNum - 1) return false;
  if (children.some((value) => tree[value].length > 1)) return false;

  return true;
};

for (let i = 0; i < testCases.length - 1; i += 2) {
  const u = testCases[i];
  const v = testCases[i + 1];
  if (u < 0 && v < 0) break;
  if (u === 0 && v === 0) {
    // answer에 문장 저장하기
    checkTree() ? answer.push(`Case ${k} is a tree.`) : answer.push(`Case ${k} is not a tree.`);
    // 다음 test 준비
    tree = {};
    nodes = new Set();
    k++;
    continue;
  }
  // key : 도착 정점 , value : 들어오는 정점들
  tree[v] ? tree[v].push(u) : (tree[v] = [u]);
  nodes.add(u);
  nodes.add(v);
}

console.log(answer.join("\n"));

// 이거 너무 어려웡...
// 일단 입력 형식은 어떻게 하는게 좋을까? 아예 숫자 1차원 배열로 쭉 펼쳐버리기
// 그 후에 dictionary 형태로 저장하기

// 트리인지 확인하기 -> 이거는 좀 더 고민해보기...
// 성공하기는 했다! 근데 그래프의 특징을 좀 더 찾아봐야할듯하다ㅠ
