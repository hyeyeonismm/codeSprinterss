/*
BOJ 14226
BFS
이모티콘
G4
*/

#include <iostream>
#include <queue>
#include <vector>
#include <tuple>

using namespace std;

int S;
bool visited[1001][1001]; // visited[screen][clipboard]

int bfs() {
    queue<tuple<int, int, int> > q;
    q.push({1, 0, 0});
    visited[1][0] = true;

    while (!q.empty()) {
        int screen, clipboard, time;
        tie(screen, clipboard, time) = q.front();
        q.pop();

        if (screen == S) return time;

        if (!visited[screen][screen]) {
            visited[screen][screen] = true;
            q.push({screen, screen, time + 1});
        }

        if (clipboard > 0 && screen + clipboard <= S && !visited[screen + clipboard][clipboard]) {
            visited[screen + clipboard][clipboard] = true;
            q.push({screen + clipboard, clipboard, time + 1});
        }

        if (screen > 1 && !visited[screen - 1][clipboard]) {
            visited[screen - 1][clipboard] = true;
            q.push({screen - 1, clipboard, time + 1});
        }
    }
    return -1;
}

int main() {
    cin >> S;
    cout << bfs() << endl;
    return 0;
}
