/*
BOJ 10972
Brute Force
다음 순열
S3
*/

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool next_permutation_by_me(vector<int>& arr) {
  int n = arr.size();

  int i = n - 2;
  while(i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
  }

  if(i < 0) {
    return false;
  }

  int j = n - 1;
  while(arr[j] <= arr[i]) {
    j--;
  }

  swap(arr[i], arr[j]);

  reverse(arr.begin() + i + 1, arr.end());

  return true;
}

int main() {
  int N;
  vector<int> numbers;
  cin >> N;

  for(int i = 0; i < N; i++) {
    int num;
    cin >> num;

    numbers.push_back(num);
  }

  // if(next_permutation(numbers.begin(), numbers.end())) {
  if(next_permutation_by_me(numbers)) {
    for(int num : numbers) {
      cout << num << " ";
    }
  }
  else {
    cout << -1;
  }
  cout << endl;

  return 0;
}