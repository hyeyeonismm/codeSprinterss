/*
BOJ 16929
Graph
G4
Two Dots
*/

#include <iostream>
#include <vector>

using namespace std;

int N, M;
vector<string> board;
vector<vector<bool>> visited;
int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};

bool dfs(int x, int y, int px, int py, char color) {
    if (visited[x][y]) return true;
    
    visited[x][y] = true;

    for (int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if (board[nx][ny] != color) continue;
        if (nx == px && ny == py) continue;
        if (dfs(nx, ny, x, y, color)) return true;
    }

    return false;
}

int main() {
    cin >> N >> M;
    board.resize(N);
    visited.assign(N, vector<bool>(M, false));

    for (int i = 0; i < N; i++) {
        cin >> board[i];
    }

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            if (!visited[i][j]) { 
                if (dfs(i, j, -1, -1, board[i][j])) {
                    cout << "Yes\n";
                    return 0;
                }
            }
        }
    }

    cout << "No\n";
    return 0;
}
