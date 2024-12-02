/*
BOJ 16197
Brute Force
G4
두 동전
*/

#include <iostream>
#include <vector>
#include <queue>
#include <tuple>

using namespace std;

int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};

int N, M;
vector<string> board;

bool is_out_of_bounds(int x, int y) {
    return x < 0 || x >= N || y < 0 || y >= M;
}

int bfs(pair<int, int> coin1, pair<int, int> coin2) {
    queue<tuple<int, int, int, int, int>> q; // x1, y1, x2, y2, 이동횟수
    q.push({coin1.first, coin1.second, coin2.first, coin2.second, 0});
    vector<vector<vector<vector<bool>>>> visited(N, vector<vector<vector<bool>>>(M, vector<vector<bool>>(N, vector<bool>(M, false))));
    visited[coin1.first][coin1.second][coin2.first][coin2.second] = true;

    while (!q.empty()) {
        auto [x1, y1, x2, y2, moves] = q.front();
        q.pop();

        if (moves > 10) {
            return -1;
        }

        for (int i = 0; i < 4; i++) {
            int nx1 = x1 + dx[i];
            int ny1 = y1 + dy[i];
            int nx2 = x2 + dx[i];
            int ny2 = y2 + dy[i];

            bool out1 = is_out_of_bounds(nx1, ny1);
            bool out2 = is_out_of_bounds(nx2, ny2);

            // 두 동전 중 하나만 떨어진 경우(성공)
            if (out1 && !out2) return moves + 1;
            if (!out1 && out2) return moves + 1;

            // 두 동전이 모두 떨어진 경우(실패))
            if (out1 && out2) continue;

            // 벽
            if (!out1 && board[nx1][ny1] == '#') {
                nx1 = x1;
                ny1 = y1;
            }
            if (!out2 && board[nx2][ny2] == '#') {
                nx2 = x2;
                ny2 = y2;
            }

            // 두 동전이 겹쳐진 경우(실패)
            if(nx1 == nx2 && ny1 == ny2) {
              continue;
            }

            // 이미 방문
            if (!visited[nx1][ny1][nx2][ny2]) {
                visited[nx1][ny1][nx2][ny2] = true;
                q.push({nx1, ny1, nx2, ny2, moves + 1});
            }
        }
    }

    return -1; // 불가능
}

int main() {
    cin >> N >> M;
    board.resize(N);

    pair<int, int> coin1 = {-1, -1};
    pair<int, int> coin2 = {-1, -1};

    for (int i = 0; i < N; i++) {
        cin >> board[i];
        for (int j = 0; j < M; j++) {
            if (board[i][j] == 'o') {
                if (coin1.first == -1) {
                    coin1 = {i, j};
                } else {
                    coin2 = {i, j};
                }
            }
        }
    }

    cout << bfs(coin1, coin2) << endl;

    return 0;
}

