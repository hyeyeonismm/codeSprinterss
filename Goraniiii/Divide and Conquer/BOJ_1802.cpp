/*
BOJ 1802
???
종이 접기
S1
*/

#include <iostream>

using namespace std;

bool isPossible(string input) {
  int k = input.length();
  while(k > 1) {
    for(int i = 1; i <= (k - 1) / 2; i++) {
      if(input[i - 1] == input [k - i]) {
        return false;
      }
    }
    k = (k - 1) / 2;
  }

  return true;
}

int main() {
  int t;
  cin >> t;

  while(t--) {
    string input;
    cin >> input;

    if(isPossible(input)) {
      cout << "YES" << endl;
    }
    else {
      cout << "NO" << endl;
    }
  }
  return 0;
}