#include <iostream>
#include <vector>

using namespace std;

int totheone(int N) {

  vector<int> cnt(N + 1);

  cnt[1] = 0;

  for(int i = 2; i <= N; i++) {
    cnt[i] = cnt[i - 1] + 1;

    if(i % 3 == 0) {
      cnt[i] = min(cnt[i], cnt[i / 3] + 1);
    }
    if(i % 2 == 0) {
      cnt[i] = min(cnt[i], cnt[i / 2] + 1);
    }
  }

  return cnt[N];
}


int main() {
  int N;

  cin >> N;

  cout << totheone(N) << endl;

  return 0;
}