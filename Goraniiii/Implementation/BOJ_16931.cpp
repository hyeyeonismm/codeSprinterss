/*
BOJ 16931
Implementation
S2
겉넓이 구하기
*/

#include <iostream>
#include <vector>

using namespace std;

int main() {
  int N, M;
  int result = 0;

  cin >> N >> M;

  vector<vector<int> > paper(N, vector<int>(M));

  for(int i = 0; i < N; i++) {
    for(int j = 0; j < M; j++) {
      cin >> paper[i][j];
    }
  }

  // 위아래넓이
  // 문제 조건에 의해 모든 칸에는 1개 이상의 정육면체가 놓임
  result += 2 * N * M;

  // 앞넓이

  for(int i = 0; i < N; i++) {
    result += paper[i][0];
    for(int j = 1; j < M; j++) {
      result += abs(paper[i][j] - paper[i][j - 1]);
    }
    result += paper[i][M - 1];
  }

  // 옆넓이

  for(int j = 0; j < M; j++) {
    result += paper[0][j];
    for(int i = 1; i < N; i++) {
      result += abs(paper[i][j] - paper[i - 1][j]);
    }
    result += paper[N - 1][j];
  }

  
  cout << result << endl;


}