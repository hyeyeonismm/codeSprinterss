const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

let readline = 0;
const t = parseInt(input[readline++]);
let answer = [];

const findFirstNodeParents = (tree, node) => {
  let parents = new Set();
  parents.add(node); // 현재 노드도 넣어주기!

  while (tree[node]) {
    node = tree[node];
    parents.add(node);
  }

  return parents;
};

const findParent = (tree, node1, node2) => {
  const parents = findFirstNodeParents(tree, node1);

  if (parents.has(node2)) return node2; // 현재 노드도 체크하기

  while (tree[node2]) {
    node2 = tree[node2];
    if (parents.has(node2)) {
      return node2;
    }
  }
};

for (let i = 0; i < t; i++) {
  let tree = {}; // 단방향으로 저장 : key - 자식, value - 부모
  const n = parseInt(input[readline++]);
  for (let j = 0; j < n - 1; j++) {
    const [parent, child] = input[readline++].split(" ").map(Number);

    tree[child] = parent;
  }

  const [node1, node2] = input[readline++].split(" ").map(Number);
  answer.push(findParent(tree, node1, node2));
}

console.log(answer.join("\n"));

// 가장 가까운 부모는..? DFS로... 부모의 경로들을 찾아야하나?
// 부모들의 경우를 쉽게 찾기 위해서 단방향으로 tree를 key - 자식, value - 부모 로 두고 탐색한다
// 첫번째 노드에서 부모 배열을 쭉 찾은 후에
// 두번째 노드도 타고 올라가면서 첫번째 부모 배열에서 같은 거 만나면 바로 답!
