#include <iostream>
#include <vector>

using namespace std;

int main() {
  int N, M;
  int r, c, d;
  int result = 0;
  
  cin >> N >> M;
  cin >> r >> c >> d;

  vector<vector<int> > room(N, vector<int>(M));
  vector<pair<int, int> > direction = {
    {-1, 0},
    {0, 1},
    {1, 0},
    {0, -1}
  };

  for(int i = 0; i < N; i++) {
    for(int j = 0; j < M; j++) {
      cin >> room[i][j];
    }
  }

  // 0 빈칸 1 벽 2 청소됨
  int i = r, j = c;
  while(true) {
    if(room[i][j] == 0) {
      room[i][j] = 2;
      result++;
    }

    if((room[i][j - 1] != 0) && (room[i + 1][j] != 0) && (room[i][j + 1] != 0) && (room[i - 1][j] != 0)) {
      if(room[i - direction[d].first][j - direction[d].second] != 1) {
        i = i - direction[d].first;
        j = j - direction[d].second;
        continue;
      }
      else {
        break;
      }
    }
    else{
      d = (d + 3) % 4;
      if(room[i + direction[d].first][j + direction[d].second] == 0) {
        i = i + direction[d].first;
        j = j + direction[d].second;
        continue;
      }
    }
  }
  cout << result << endl;
}