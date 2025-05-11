/*
BOJ 17386
Geomatric
선분 교차 1
G3
*/

#include <iostream>

using namespace std;

int ccw(long x1, long y1, long x2, long y2, long x3, long y3) {
  long long ccw = (x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1);
  if(ccw < 0) {
    return -1;
  }
  else if(ccw > 0) {
    return 1;
  }
  else {
    return 0;
  }
}

int main() {
  int x1, y1, x2, y2, x3, y3, x4, y4;

  cin >> x1 >> y1 >> x2 >> y2;
  cin >> x3 >> y3 >> x4 >> y4;

  // ccw 이용
  int ccw123 = ccw(x1, y1, x2, y2, x3, y3);
  int ccw124 = ccw(x1, y1, x2, y2, x4, y4);
  int ccw341 = ccw(x3, y3, x4, y4, x1, y1);
  int ccw342 = ccw(x3, y3, x4, y4, x2, y2);

  if(ccw123 * ccw124 < 0 && ccw341 * ccw342 < 0) {
    cout << "1" << endl;
  }
  else {
    cout << "0" << endl;
  }
}