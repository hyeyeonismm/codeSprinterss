#include <iostream>
#include <vector>

using namespace std;

int maxCandy(vector<vector<char> >& board) {
  int N = board.size();
  int maxCnt = 1;

  for(int i = 0; i < N; i++) {
    int cnt = 1;
    for(int j = 0; j < N - 1; j++) {
      if(board[i][j] == board[i][j + 1]) {
        cnt++;
      }
      else {
        maxCnt = max(maxCnt, cnt);
        cnt = 1;
      }
      maxCnt = max(maxCnt, cnt);
    }
  }
  for(int j = 0; j < N; j++) {
    int cnt = 1;
    for(int i = 0; i < N - 1; i++) {
      if(board[i][j] == board[i + 1][j]) {
        cnt++;
      }
      else {
        maxCnt = max(maxCnt, cnt);
        cnt = 1;
      }
      maxCnt = max(maxCnt, cnt);
    } 
  }

  return maxCnt;
 
}

int main() {
  int N;
  int result = 0;
  
  cin >> N;

  vector<vector<char> > bomboard(N, vector<char>(N));

  for(int i = 0; i < N; i++) {
    for(int j = 0; j < N; j++) {
      cin >> bomboard[i][j];
    }
  }

  for(int i = 0; i < N; i++) {
    for(int j = 0; j < N; j++) {
      if(i < N - 1) {
        swap(bomboard[i][j], bomboard[i + 1][j]);
        result = max(result, maxCandy(bomboard));
        swap(bomboard[i][j], bomboard[i + 1][j]);
      }
      if(j < N - 1) {
        swap(bomboard[i][j], bomboard[i][j + 1]);
        result = max(result, maxCandy(bomboard));
        swap(bomboard[i][j], bomboard[i][j + 1]);
      }
    }
  }

  cout << result << endl;

}