/*
BOJ 1459
Greedy
S3
걷기
*/

#include <iostream>

using namespace std;

int main() {
  long long x, y, w, s;
  long long distance = 0;
  cin >> x >> y >> w >> s;
  
  if(s > w * 2) {
    distance = (x + y) * w;
  }
  else if(s < w) {
    if((x + y) % 2 == 0) {
      distance = max(x, y) * s;
    }
    else {
      distance = (max(x, y) - 1) * s + w;
    }
  }
  else {  // w < s < 2w
    distance = min(x, y) * s + abs(x - y) * w;
  }

  cout << distance << endl;

  return 0;

  
}