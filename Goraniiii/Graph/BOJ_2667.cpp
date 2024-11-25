/*
BOJ 2667
Graph
S1
단지번호붙이기
*/

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int dx[4] = {1, -1, 0, 0};
int dy[4] = {0, 0, 1, -1};

int traverseDFS(int i, int j, int N, vector<vector<int> >& map, vector<vector<int> >& visited) {
  int result = 1;
  int nx, ny;
  visited[i][j] = 1;
  for(int d = 0; d < 4; d++) {
    nx = i + dx[d];
    ny = j + dy[d];

    if((nx >= 0) && (nx < N) && (ny >= 0) && (ny < N)) {
      if(map[nx][ny] == 1 && visited[nx][ny] != 1) {
        result += traverseDFS(nx, ny, N, map, visited);
      }
    }
  }

  return result;
}

int main() {
  int N;
  cin >> N;

  vector<vector<int> > map(N, vector<int>(N));
  vector<vector<int> > visited(N, vector<int>(N, 0));
  vector<int> result;

  for(int i = 0; i < N; i++) {
    string line;
    cin >> line;
    for(int j = 0; j < N; j++) {
      map[i][j] = line[j] - '0';
    }
  }

  for(int i = 0; i < N; i++) {
    for(int j = 0; j < N; j++) {
      if((map[i][j] == 1) && (visited[i][j] == 0)) {
        result.push_back(traverseDFS(i, j, N, map, visited));
      }
    }
  }

  sort(result.begin(), result.end());

  cout << result.size() << endl;
  for(int i = 0; i < result.size(); i++) {
    cout << result[i] << endl;
  }

}
