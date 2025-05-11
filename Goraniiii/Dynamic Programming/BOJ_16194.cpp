#include <iostream>
#include <vector>

using namespace std;

int main() {
  int N;
  cin >> N;

  vector<int> pack(N + 1);
  vector<int> result(N + 1);

  for(int i = 1; i <= N; i++) {
    cin >> pack[i];
  }

  for(int i = 1; i <= N; i++) {
    result[i] = pack[i];
    for(int j = 1; j < i; j++) {
      result[i] = min(result[i], result[i - j] + pack[j]);
    }
  }

  cout << result[N] << endl;
}