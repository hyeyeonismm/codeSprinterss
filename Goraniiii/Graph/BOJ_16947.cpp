/*
BOJ 16947
Graph
G3
서울 지하철 2호선
*/

#include <iostream>
#include <vector>
#include <queue>
#include <cstring>

using namespace std;

vector<int> graph[100001];
bool visited[100001];
int parent[100001];
int cycle_start = -1;
bool is_cycle[100001];
int result[100001];

int find_cycle(int station, int prev) {
    visited[station] = true;

    for (int next : graph[station]) {
        if (next == prev) continue;
        if (visited[next]) {
            return next;
        }

        parent[next] = station;
        int cycle_start = find_cycle(next, station);
        
        if (cycle_start != -1) {
            is_cycle[station] = true;
            if (station == cycle_start) return -1;
            return cycle_start;
        }
    }
    return -1;
}

// void calculate(int station) {
//   if(is_cycle[station]) {
//     result[station] = 0;
//   }
//   else {
//     int count = 0;

//   }
// }


int main() {
  int N;
  cin >> N;

  for(int i = 0; i < N; i++) {
    int u, v;
    cin >> u >> v;

    graph[u].push_back(v);
    graph[v].push_back(u);
  }

  memset(visited, false, sizeof(visited));
  memset(is_cycle, false, sizeof(is_cycle));
  memset(parent, -1, sizeof(parent));

  find_cycle(1, -1);

  memset(result, -1, sizeof(result));

  // for(int i = 0; i < N; i++) {

  // }


}