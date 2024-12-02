/*
BOJ 2178
Graph
S1
미로탐색
*/

#include <iostream>
#include <queue>

using namespace std;

int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};

int main() {
  int N, M;
  cin >> N >> M;
  vector<vector<int> > maze(N, vector<int>(M));
  vector<vector<int> > visited(N, vector<int>(M, 0));

  queue<pair<int, int> > q;


  for(int i = 0; i < N; i++) {
    string line;
    cin >> line;
    for(int j = 0; j < M; j++) {
      maze[i][j] = line[j] - '0';
    }
  }
  visited[0][0] = 1;
  q.push({0, 0});
  while(!q.empty()) {
    pair<int, int> curr = q.front();
    q.pop();

    if(curr.first == N - 1 && curr.second == M - 1) {
      cout << visited[curr.first][curr.second] << endl;
      return 0;
    }

    for(int i = 0; i < 4; i++) {
      int nx = curr.first + dx[i];
      int ny = curr.second + dy[i];

      if(nx >= 0 && nx < N && ny >= 0 && ny < M && visited[nx][ny] == 0 && maze[nx][ny] == 1) {
        visited[nx][ny] = visited[curr.first][curr.second] + 1;
        q.push({nx, ny});
      }
    }
  }

  return 0;

}