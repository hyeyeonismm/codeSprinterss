/* 
BOJ 11047
Greedy
동전 0
S4
*/

#include <iostream>
#include <vector>

using namespace std;

int main() {
  int N, K;
  vector<int> coins;
  int result = 0;

  cin >> N >> K;

  for(int i = 0; i < N; i++) {
    int A;
    cin >> A;
    coins.push_back(A);
  }

  for(int i = N - 1; i >= 0; i--) {
    int coin = coins[i];
    while(K >= coin) {
      K -= coin;
      result++;
    }
  }

  cout << result << endl;
}