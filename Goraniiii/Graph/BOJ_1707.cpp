/*
BOJ 1707
Graph
G4
이분 그래프
*/

#include <iostream>
#include <vector>
#include <queue>

using namespace std;

bool isBipartite(int V, vector<vector<int>>& graph) {
    vector<int> color(V + 1, -1);

    for (int start = 1; start <= V; start++) {
        if (color[start] != -1) continue;

        queue<int> q;
        q.push(start);
        color[start] = 0;

        while (!q.empty()) {
            int current = q.front();
            q.pop();

            for (int neighbor : graph[current]) {
                if (color[neighbor] == -1) {
                    color[neighbor] = 1 - color[current];
                    q.push(neighbor);
                } else if (color[neighbor] == color[current]) {
                    return false;
                }
            }
        }
    }
    return true;
}

int main() {
    int T;
    cin >> T;

    while (T--) {
        int V, E;
        cin >> V >> E;

        vector<vector<int>> graph(V + 1);

        for (int i = 0; i < E; i++) {
            int u, v;
            cin >> u >> v;
            graph[u].push_back(v);
            graph[v].push_back(u);
        }

        if (isBipartite(V, graph)) {
            cout << "YES" << endl;
        } else {
            cout << "NO" << endl;
        }
    }
    return 0;
}
