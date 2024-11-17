#include <iostream>
#include <vector>

using namespace std;

int main() {
  int N;
  int input;

  cin >> N;

  vector<int> arr(N);
  vector<int> result(N, -1);

  vector<int> stack;

  for(int i = 0; i < N; i++) {
    cin >> arr[i];
  }

  for(int i = 0; i < N; i++) {
    while(!stack.empty() && arr[stack.back()] < arr[i]) {
      result[stack.back()] = arr[i];
      stack.pop_back();
    }
    stack.push_back(i);
  }

  for(int r : result) {
    cout << r << " ";
  }
  cout << endl;

  return 0;
}