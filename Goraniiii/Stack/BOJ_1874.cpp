#include <iostream>
#include <vector>

using namespace std;

string isStackSequence(vector<int> input) {
  vector<int> test;
  string result = "";
  int curnum = 1;
  int k = 0;

  while(k < input.size()) {
    while (curnum <= input[k]) {
      test.push_back(curnum++);
      result += "+\n"; // 결과에 push 기록
    }

    if(!test.empty() && test.back() == input[k]) {
      test.pop_back();
      result += "-\n";
      k++;
    }
    else {
      return "NO\n";
    }
  }

  return result;
}



int main() {
  int n;
  int num;
  vector<int> input;
  cin >> n;

  for(int i = 0; i < n; i++) {
    cin >> num;
    input.push_back(num);
  }

  cout << isStackSequence(input);
  
  
}