#include <iostream>
#include <vector>

using namespace std;

int main() {
  int N;
  cin >> N;
  vector<int> result(N + 1);

  result[0] = 1;
  result[1] = 1;

  for(int i = 2; i <= N; i++) {
    result[i] = (result[i - 1] + result[i - 2]) % 10007;
  }

  cout << result[N] << endl;

  return 0;
}