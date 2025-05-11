/*
BOJ 11758
Geomatric
G5
CCW
*/

#include <iostream>

using namespace std;

struct point {
  int x, y;
};

int main() {
  
  point p1, p2, p3;

  cin >> p1.x >> p1.y;
  cin >> p2.x >> p2.y;
  cin >> p3.x >> p3.y;

  // cross product
  long long ccw = (p2.x - p1.x) * (p3.y - p1.y) - (p3.x - p1.x) * (p2.y - p1.y);

  if(ccw < 0) {
    cout << "-1" << endl;
  }
  else if(ccw > 0) {
    cout << "1" << endl;
  }
  else {
    cout << "0";
  }

  return 0;
}