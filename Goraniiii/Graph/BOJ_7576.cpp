/*
BOJ 7576
Graph
G5
토마토
*/

#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int dx[4] = {1, -1, 0, 0};
int dy[4] = {0, 0, 1, -1};

int main() {
  int M, N;
  cin >> M >> N;

  vector<vector<int> > tomatobox(N, vector<int>(M));
  vector<vector<int> > ripeday(N, vector<int>(M, 0));

  queue<pair<int, int> > tomatoQueue;  // for BFS

  for(int i = 0; i < N; i++) {
    for(int j = 0; j < M; j++) {
      cin >> tomatobox[i][j];
      if(tomatobox[i][j] == 1) {
        tomatoQueue.push({i, j});
      }
    }
  }

  while (!tomatoQueue.empty()) {
        int x = tomatoQueue.front().first;
        int y = tomatoQueue.front().second;
        tomatoQueue.pop();

        for (int dir = 0; dir < 4; dir++) {
            int nx = x + dx[dir];
            int ny = y + dy[dir];

            if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
                if (tomatobox[nx][ny] == 0) {
                    tomatobox[nx][ny] = 1; // ripe tomato
                    ripeday[nx][ny] = ripeday[x][y] + 1;
                    tomatoQueue.push({nx, ny});
                }
            }
        }
    }

    int max_days = 0;
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            if (tomatobox[i][j] == 0) {
                cout << -1 << endl;
                return 0;
            }
            max_days = max(max_days, ripeday[i][j]);
        }
    }

    cout << max_days << endl;

}