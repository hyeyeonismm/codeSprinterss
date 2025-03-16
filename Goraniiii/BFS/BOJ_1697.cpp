/*
BOJ 1697
BFS
숨바꼭질
S1
*/

#include <iostream>
#include <queue>
#include <vector>
#include <tuple>

using namespace std;

bool visited[100001];

int bfs(int start, int goal) {
    queue<pair<int, int>> q;
    q.push({start, 0});
    visited[start] = true;

    while (!q.empty()) {
        int current, time;
        tie(current, time) = q.front();
        q.pop();

        if (current == goal) {
            return time;
        }

        if (current + 1 < 100001 && !visited[current + 1]) {
            visited[current + 1] = true;
            q.push({current + 1, time + 1});
        }
        if (current - 1 >= 0 && !visited[current - 1]) {
            visited[current - 1] = true;
            q.push({current - 1, time + 1});
        }
        if (current * 2 < 100001 && !visited[current * 2]) {
            visited[current * 2] = true;
            q.push({current * 2, time + 1});
        }
    }
    return -1;
}

int main() {
    int start, goal;
    cin >> start >> goal;
    cout << bfs(start, goal) << endl;
    return 0;
}
