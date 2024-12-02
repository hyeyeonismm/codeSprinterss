/*
BOJ 7562
Graph
S1
나이트의 이동
*/

#include <iostream>
#include <queue>

using namespace std;

int dx[8] = {2, 1, -1, -2, -2, -1, 1, 2};
int dy[8] = {1, 2, 2, 1, -1, -2, -2, -1};

int shortestNightMove(int l, int x1, int y1, int x2, int y2) {
  queue<pair<int, int> > q;
  vector<vector<int>> visited(l, vector<int>(l, -1)); // -1: 미방문, 0~ : 이전까지의 횟수

  q.push(pair(x1, y1));
  visited[x1][y1] = 0;

  while(!q.empty()) {
    pair<int, int> current = q.front();
    q.pop();

    if(current.first == x2 && current.second == y2) {
      return visited[current.first][current.second];
    }

    for(int i = 0; i < 8; i++) {
      int nx = current.first + dx[i];
      int ny = current.second + dy[i];

      if(nx >= 0 && nx < l && ny >= 0 && ny < l && visited[nx][ny] == -1) {
        visited[nx][ny] = visited[current.first][current.second] + 1;
        q.push({nx, ny});
      }
    }
  }

  return -1;

}

int main() {
  int N;
  cin >> N;

  for(int i = 0; i < N; i++) {
    int l;
    int x1, y1, x2, y2;

    cin >> l;
    cin >> x1 >> y1;
    cin >> x2 >> y2;

    cout << shortestNightMove(l, x1, y1, x2, y2) << endl;

  }
}