#include <iostream>
#include <vector>
#include <string>
#include <iomanip>

using namespace std;

int main() {
  int N;
  string input;

  cin >> N;

  vector<double> nums(N);
  
  vector<double> stack;

  double result;

  cin >> input;

  for(int i = 0; i < N; i++) {
    cin >> nums[i];
  }

  for(char a : input) {
    double op1, op2;
    if(a >= 'A' && a <= 'Z') {
      stack.push_back(nums[a - 'A']);
    }
    else {
      op2 = stack.back(); stack.pop_back();
      op1 = stack.back(); stack.pop_back();
      switch (a)
      {
      case '+':
        stack.push_back(op1 + op2);
        break;
      case '-':
        stack.push_back(op1 - op2);
        break;
      case '*':
        stack.push_back(op1 * op2);
        break;
      case '/':
        stack.push_back(op1 / op2);
        break;
      }
    }
    
  }

  result = stack.back();
  stack.pop_back();

  // result = int(result * 100) / 100.0;

  cout << fixed << setprecision(2) << result << endl;

}