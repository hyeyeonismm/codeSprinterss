/*
BOJ 2170
Geomatric
G5
선 긋기
*/

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
  ios_base::sync_with_stdio(false); // 입출력 속도 향상
  cin.tie(NULL); // cin과 cout의 동기화 해제

  int N;
  vector<pair<int, int> > lines;
  int result = 0;

  cin >> N;

  for(int i = 0; i < N; i++) {
    int x, y;
    cin >> x >> y;

    lines.push_back({x, y});
  }

  sort(lines.begin(), lines.end());

  pair<int, int> cur_line = lines[0];
  for(int i = 1; i < N; i++) {
    if(cur_line.second >= lines[i].first) {
      cur_line.second = max(cur_line.second, lines[i].second);
    }
    else {
      result += cur_line.second - cur_line.first;
      cur_line = lines[i];
    }
  }
  result += cur_line.second - cur_line.first;

  cout << result << endl;
}