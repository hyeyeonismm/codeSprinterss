// BOJ 1158
// 순환큐

#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int main() {
  int N, K;
  cin >> N >> K;

  vector<int> result;

  queue<int> que;

  for(int i = 1; i <= N; i++) {
    que.push(i);
  }

  while(!que.empty()) {
    for(int i = 0; i < K - 1; i++) {
      que.push(que.front());
      que.pop();
    }
    result.push_back(que.front());
    que.pop();
  }

  cout << "<";
    for (size_t i = 0; i < result.size(); i++) {
        cout << result[i];
        if (i < result.size() - 1) {
            cout << ", ";
        }
    }
    cout << ">" << endl;

}