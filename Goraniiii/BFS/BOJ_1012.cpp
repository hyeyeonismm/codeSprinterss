/*
BOJ 1012
BFS
유기농 배추
S2
*/

#include <iostream>
#include <queue>
#include <vector>
#include <tuple>

using namespace std;

int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};

void bfs(vector<vector<bool> >& field, int start_x, int start_y, int width, int height) {
  queue<pair<int, int> > q;
  q.push({start_x, start_y});
  field[start_x][start_y] = false;

  while(!q.empty()) {
    int x, y;
    tie(x, y) = q.front();
    q.pop();

    for(int i = 0; i < 4; i++) {
      int move_x, move_y;
      move_x = x + dx[i];
      move_y = y + dy[i];

      if((move_x >= 0 && move_x < width) && (move_y >= 0 && move_y < height) && field[move_x][move_y]) {
        field[move_x][move_y] = false;
        q.push({move_x, move_y});
      }
    }
  }
}

int countWormAmount(vector<vector<bool> >& field, queue<pair<int, int> >& wormList, int width, int height) {
  int result = 0;
  while(!wormList.empty()) {
    int x, y;
    tie(x, y) = wormList.front();
    wormList.pop();

    if(field[x][y]) {
      bfs(field, x, y, width, height);
      result++;
    }
  }

  return result;
}

int main() {
  int T;
  int width, height;
  int N;

  cin >> T;

  while(T--) {
    cin >> width >> height >> N;
    vector<vector<bool> > field(width, vector<bool>(height));
    queue<pair<int, int> > wormList;
    while(N--) {
      int x, y;
      cin >> x >> y;
      field[x][y] = 1;
      wormList.push({x, y});
    }
    cout << countWormAmount(field, wormList, width, height) << endl;
  }
}