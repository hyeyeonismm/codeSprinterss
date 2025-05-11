/*
BOJ 1260
Graph
S2
DFS와 BFS
*/

#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>

using namespace std;

void traverse_dfs(int node, vector<vector<int> >& graph, vector<bool>& visited) {
  visited[node] = true;
  cout << node << " ";

  for(int next : graph[node]) {
    if(!visited[next]) {
      traverse_dfs(next, graph, visited);
    }
  }
}

void traverse_bfs(int node, vector<vector<int> >& graph, vector<bool>& visited) {
  queue<int> q;
  q.push(node);
  visited[node] = true;

  while(!q.empty()) {
    int current = q.front();
    q.pop();

    cout << current<< " ";

    for(int next : graph[current]) {
      if(!visited[next]) {
        visited[next] = true;
        q.push(next);
      }
    }
  }
}

int main() {
  int N, M, V;

  cin >> N >> M >> V;

  vector<vector<int> > graph(N + 1);

  for(int i = 0; i < M; i++) {
    int u, v;
    cin >> u >> v;

    graph[u].push_back(v);
    graph[v].push_back(u);
  }

  
  // sorting(문제조건에 따라)
  for(int i = 1; i <= N; i++) {
    sort(graph[i].begin(), graph[i].end());
  }


  // DFS
  vector<bool> visited(N + 1, false);
  traverse_dfs(V, graph, visited);
  cout << endl;


  // BFS
  visited = vector<bool>(N + 1, false); // 벡터 새로 생성
  traverse_bfs(V, graph, visited);


}