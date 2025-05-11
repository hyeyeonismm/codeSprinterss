/*
BOJ 13023
Graph
G5
ABCDE
*/

#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> graph;
vector<bool> visited;
bool found = false;

void dfs(int node, int depth) {
    if (depth == 4) {
        found = true;
        return;
    }
    
    visited[node] = true;
    for (int neighbor : graph[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor, depth + 1);
            if (found) return;
        }
    }
    visited[node] = false;
}

int main() {
    int N, M;
    cin >> N >> M;

    graph.resize(N);
    visited.resize(N, false);

    for (int i = 0; i < M; i++) {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u);
    }

    for (int i = 0; i < N; i++) {
        dfs(i, 0);
        if (found) {
            cout << "1" << endl;
            return 0;
        }
    }

    cout << "0" << endl;
    return 0;
}
