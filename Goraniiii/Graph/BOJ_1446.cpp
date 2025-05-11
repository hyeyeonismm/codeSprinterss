/*
BOJ 1446
Graph Traversal
S1
지름길
*/

#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

const int INF = 1e9;
int N, D;
vector<pair<int, int>> graph[10001];
int dist[10001];

void dijkstra() {
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, 0});
    dist[0] = 0;

    while (!pq.empty()) {
        int cost = pq.top().first;
        int now = pq.top().second;
        pq.pop();

        if (dist[now] < cost) continue;

        for (auto [next, d] : graph[now]) {
            int nextCost = cost + d;
            if (nextCost < dist[next]) {
                dist[next] = nextCost;
                pq.push({nextCost, next});
            }
        }
    }
}

int main() {
    cin >> N >> D;

    fill(dist, dist + 10001, INF);

    for (int i = 0; i < D; i++) {
        graph[i].push_back({i + 1, 1});
    }

    for (int i = 0; i < N; i++) {
        int start, end, length;
        cin >> start >> end >> length;
        if (end > D) continue;
        graph[start].push_back({end, length});
    }

    dijkstra();

    cout << dist[D] << endl;
    return 0;
}
