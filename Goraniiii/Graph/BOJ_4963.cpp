/*
BOJ 4963
Graph
S2
섬의 개수
*/

#include <iostream>
#include <vector>

using namespace std;

int dx[3] = {-1, 0, 1};
int dy[3] = {-1, 0, 1};

void visitedBFS(int i, int j, int w, int h, vector<vector<int> >& map, vector<vector<int> >& visited) {
  visited[i][j] = 1;

  for(int n = 0; n < 3; n++) {
    for(int m = 0; m < 3; m++) {
      int nx = i + dx[n];
      int ny = j + dy[m];

      if((nx >= 0) && (nx < h) && (ny >= 0) && (ny < w)) {
        if(map[nx][ny] == 1 && visited[nx][ny] == 0) {
          visitedBFS(nx, ny, w, h, map, visited);
        }
      }

    }
  }
}

int main() {
  int w, h;

  while(true) {
    cin >> w >> h;

    int result = 0;

    if(w == 0 && h == 0) {
      break;
    }

    vector<vector<int> > map(h, vector<int>(w));
    vector<vector<int> > visited(h, vector<int>(w, 0));

    for(int i = 0; i < h; i++) {
      for(int j = 0; j < w; j++) {
        cin >> map[i][j];
      }
    }

    for(int i = 0; i < h; i++) {
      for(int j = 0; j < w; j++) {
        if(map[i][j] == 1 && visited[i][j] == 0) {
          visitedBFS(i, j, w, h, map, visited);
          result++;
        }
      }
    }

    cout << result << endl;
  }

}