const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const computers = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  const [end, start] = input[i].split(" ").map(Number);

  computers[start].push(end);
}

const dfs = (startNode) => {
  let visited = new Array(n + 1).fill(false);
  let needVisit = [startNode];
  let count = 0;

  while (needVisit.length > 0) {
    const node = needVisit.pop();

    const children = computers[node] ?? [];

    for (let child of children) {
      if (visited[child]) continue;

      count++;
      visited[node] = true;
      needVisit.push(child);
    }
  }

  return count;
};

let max = 0;
let answer = [];
for (let i = 1; i <= n; i++) {
  const result = dfs(i);

  if (max < result) {
    answer = [i];
    max = result;
  } else if (max === result) {
    answer.push(i);
  }
}

console.log(answer.join(" "));

/*

BFS로 풀었는데 메모리 초과 발생...

DFS에서는 각 층별로 모든 자식 노드를 저장해야 할 필요가 없기 때문에 BFS에 비해 메모리 요구량이 훨씬 적다!!

시간 초과 발생했는데 인터넷에 있는 풀이도 시간초과가 발생해서 어떤 부분에서 그랬는지를 잘 모르겟다....

*/
