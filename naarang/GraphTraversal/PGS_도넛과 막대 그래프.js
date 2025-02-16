function solution(edges) {
  var answer = [0, 0, 0, 0];
  let graph = {};
  let fromEdges = new Array(1000001).fill(0); // 각 노드마다 자신을 가리키는 간선의 수

  for (let edge of edges) {
    const [start, end] = edge;
    graph[start] ? graph[start].push(end) : (graph[start] = [end]);
    fromEdges[end]++;
  }

  // 새로운 정점 찾기 : 자신을 가리키는 간선이 없고 가리키는 정점은 2개 이상! 루트 노드
  for (let i = 1; i <= 1000001; i++) {
    if (fromEdges[i] === 0 && graph[i]?.length >= 2) {
      answer[0] = i;
      break;
    }
  }

  // 정점의 번호가 연속된 숫자가 아님!!
  for (let i = 1; i <= 1000001; i++) {
    if (!graph[i] && fromEdges[i] > 0) answer[2]++;
    else if (graph[i]?.length === 2 && answer[0] !== i) answer[3]++;
  }

  let treeNum = graph[answer[0]].length;

  answer[1] = treeNum - answer[2] - answer[3];

  return answer;
}

/*

이 문제는 처음에 dfs로 풀었는데 시간 초과가 발생!
사실 직접 모든 노드를 탐색할 필요 없이 해당 노드로 들어오는 간선의 수, 가리키는 간선의 수로 규칙을 찾아내는 것이 더 빨랐다

따라서 지금 풀이에서 개수를 더 깔끔하게 세도록 개선할 수 있을 것 같다!

*/
