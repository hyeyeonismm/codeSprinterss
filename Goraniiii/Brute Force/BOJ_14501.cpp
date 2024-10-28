#include <iostream>
#include <vector>

using namespace std;

int getMaxValue(int k, int N, vector<int>& T, vector<int>& P, vector<int>& maxValue) {
  if(k >= N) {
    return 0;
  }
  
  if(maxValue[k] != -1) {
    return maxValue[k];
  }

  if(k + T[k] > N) {
    maxValue[k] = getMaxValue(k + 1, N, T, P, maxValue);
  }
  else {
    maxValue[k] = max(getMaxValue(k + T[k], N, T, P, maxValue) + P[k], getMaxValue(k + 1, N, T, P, maxValue));
  }
 
  return maxValue[k];
}

int main() {
  int N;

  cin >> N;

  vector<int> T(N + 1), P(N + 1), maxValue(N, -1);

  for(int i = 0; i < N; i++) {
    cin >> T[i] >> P[i];
  }

  cout << getMaxValue(0, N, T, P, maxValue) << endl;
  
     
}