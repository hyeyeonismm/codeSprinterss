/*
BOJ 11399
Greedy
ATM
S4
*/

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
  int N;
  vector<int> times;
  int result = 0;

  cin >> N;

  for(int i = 0; i < N; i++) {
    int P;
    cin >> P;
    times.push_back(P);
  }

  sort(times.begin(), times.end());

  for(int i = 0; i < N; i++) {
    result += (N - i) * times[i];
  }

  cout << result << endl;
}