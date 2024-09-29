#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

int main() {
  int N;
  cin >> N;

  vector<int> arr(N);
  vector<int> result(N, -1);

  vector<int> stack;

  unordered_map<int, int> freq;

  for(int i = 0; i < N; i++) {
    cin >> arr[i];
    freq[arr[i]]++;
  }

  for(int i = 0; i < N; i++) {
    while(!stack.empty() && freq[arr[stack.back()]] < freq[arr[i]]) {
      result[stack.back()] = arr[i];
      stack.pop_back();
    }
    stack.push_back(i);
  }

  for(int r : result) {
    cout << r << " ";
  }
  cout << endl;


}