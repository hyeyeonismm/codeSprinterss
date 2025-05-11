const fs = require("fs");
const input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");
let answer = [];

const makeTree = (numbers, k) => {
  let tree = {};
  let parentIndex = -1;

  // 트리 생성
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i - 1] + 1) {
      parentIndex++;
    }

    if (!tree[numbers[parentIndex]]) tree[numbers[parentIndex]] = [];
    if (!tree[numbers[i]]) tree[numbers[i]] = [];

    // 양방향 연결! 이때 value의 배열에서 0번째 원소는 부모노드값
    tree[numbers[parentIndex]].push(numbers[i]);
    tree[numbers[i]].push(numbers[parentIndex]);
  }

  // 루트노드가 k인 경우
  if (parentIndex === -1 || numbers[0] === k) {
    answer.push(0);
    return;
  }

  let parent = tree[k][0]; // 부모
  let grandParent = tree[parent][0]; // 조상

  if (grandParent > parent || parent > k) {
    // 오류
    answer.push(0);
    return;
  }

  let siblings = 0;
  for (let parents of tree[grandParent]) {
    // parents > grandParents 해주는 이유! grandParent가 루트노드가 아니면 양방향 연결이어서 grandgrandParent값이 있을수도!
    // 부모 제외한 사촌 수 계산
    if (parents !== parent && parents > grandParent) siblings += tree[parents].slice(1).length;
  }

  answer.push(siblings);
};

for (let i = 0; i < input.length; i++) {
  const [n, k] = input[i].split(" ").map(Number);

  if (n === 0 && k === 0) break;

  const numbers = input[++i].split(" ").map(Number);
  makeTree(numbers, k);
}

console.log(answer.join("\n"));

// 어떻게 저장해야할 지 자료구조 고민이 많이 되었음...
// 근데 사촌을 구하는 것은 조상 - 부모 - k인 자식 관계만 알면 되서 객체로 양방향 연결함
// 양방향 연결 시에 포인트는 value의 배열에서 0번째 원소가 부모 노드라는 것이다! -> 왜냐면 부모부터 차례대로 채워가니깐!

// 계속 틀렸습니다 오류나서 많이 해맸음ㅠ
