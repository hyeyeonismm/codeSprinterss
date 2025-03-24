/*
BOJ 10610
Greedy
30
S3
*/

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
  string N;
  cin >> N;
  vector<int> nums;

  string result = "";

  bool includeZero = false;
  int sumofNums = 0;

  for(int i = 0; i < N.length(); i++) {
    int num = N[i] - '0';

    if(num == 0 && !includeZero) {
      includeZero = true;
    }
    else {
      sumofNums += num;
      nums.push_back(num);
    }
  }
  
  if(sumofNums % 3 == 0 && includeZero) {
    sort(nums.rbegin(), nums.rend());
    for(int i = 0; i < nums.size(); i++) {
      result += char(nums[i] + '0');
    }
    result += "0";
    cout << result << endl;
  }
  else  {
    cout << "-1" << endl;
  }

}