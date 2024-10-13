#include <iostream>
#include <vector>

using namespace std;

int main() {
  int N;
  cin >> N;

  vector<vector<int>> map(N, vector<int>(N));
  vector<vector<long long>> dp(N, vector<long long>(N, 0));

  for(int i = 0; i < N; i++) {
    for(int j = 0; j < N; j++) {
      cin >> map[i][j];
    }
  }

  dp[0][0] = 1;

  for(int i = 0; i < N; i++) {
    for(int j = 0; j < N; j++) {
      if(dp[i][j] > 0) {
        int jump = map[i][j];
        if(jump > 0) {
          if(j + jump < N) {
            dp[i][j + jump] += dp[i][j];
          }
          if(i + jump < N) {
            dp[i + jump][j] += dp[i][j];
          }
        }
      }
    }
  }

  cout << dp[N-1][N-1] << endl;


  return 0;
}