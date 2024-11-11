/*
BOJ 1182
Brute Force
S2
부분수열의 합
*/

#include <iostream>
#include <vector>

using namespace std;


int partialSequence(vector<int>& arr, int n, int s) {
  if(n < 0) {
    if(s == 0) {
      return 1;
    }
    else {
      return 0;
    }
  }
  else {
    return partialSequence(arr, n - 1, s) + partialSequence(arr, n - 1, s - arr[n]);
  }
}


int main() {
  int N, S;

  cin >> N >> S;

  vector<int> array(N);

  for(int i = 0; i < N; i++) {
    cin >> array[i];
  }

  if(S == 0) {
    cout << partialSequence(array, N - 1, S) - 1 << endl;
  }
  else {
    cout << partialSequence(array, N - 1, S) << endl;
  }

}