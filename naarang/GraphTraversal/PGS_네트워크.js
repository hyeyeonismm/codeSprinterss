function solution(n, computers) {
  var answer = 0;
  let visited = new Array(n).fill(false);

  const dfs = (start) => {
    let queue = [];
    queue.push(start);

    while (queue.length) {
      const node = queue.shift();
      visited[node] = true;

      for (let i = 0; i < n; i++) {
        const isConnected = computers[node][i];
        if (!isConnected) continue;

        if (!visited[i]) queue.push(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}
