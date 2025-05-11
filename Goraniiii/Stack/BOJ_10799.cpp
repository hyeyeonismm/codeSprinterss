#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
  string input;
  vector<char> stack;
  int stick = 0;
  int result = 0;
  
  getline(cin, input);

  for(char a : input) {
    if(a == '(') {
      stick++;
    }
    else{ // a == ')'
      stick--;
      if(stack.back() == ')') { // 레이저아님
        result++;
      }
      else { // 레이저
        result += stick;
      }
      
    }
    stack.push_back(a);

  }
  cout << result << endl;
}
