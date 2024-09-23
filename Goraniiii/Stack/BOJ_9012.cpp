#include <iostream>
#include <string>
#include <vector>

using namespace std;

bool VPS(string input) {
  vector<char> vec;
  for(char c : input) {
    if(c == '(') {
      vec.push_back(c);
    }
    else if(c == ')') {
      if(vec.empty()) {
        return false;
      }
      else {
        vec.pop_back();
      }
    }
  }
  if(vec.empty()) {
    return true;
  }
  else {
    return false;
  }
}

int main() {
  string input;
  int T;

  cin >> T;

  for(int i = 0; i < T; i++) {
    cin >> input;
    cout << (VPS(input) ? "YES" : "NO") << endl;
  }
}