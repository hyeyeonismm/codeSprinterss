/*
BOJ 11724
Graph
S2
연결 요소의 개수
*/

#include <iostream>
#include <vector>

using namespace std;

void traverse_dfs(int node, vector<vector<int> >& graph, vector<bool>& visited) {
  visited[node] = true;

  for(int next : graph[node]) {
    if(!visited[next]) {
      traverse_dfs(next, graph, visited);
    }
  }
}

int main() {
  int result = 0;

  int N, M;
  cin >> N >> M;

  vector<vector<int> > graph(N + 1);

  for(int i = 0; i < M; i++) {
    int u, v;
    cin >> u >> v;

    graph[u].push_back(v);
    graph[v].push_back(u);
  }
    vector<bool> visited(N + 1, false);

  for(int i = 1; i <= N; i++) {
    if(!visited[i]) {
      result++;
      traverse_dfs(i, graph, visited);
    }
  }

  cout << result << endl;

  
}