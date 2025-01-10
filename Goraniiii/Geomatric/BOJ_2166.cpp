/*
BOJ 2166
Geomatric
G5
다각형의 면적
*/

#include <iostream>
#include <iomanip>
#include <vector>
#include <cmath>

using namespace std;

int main() {
  int N;
  double result = 0;

  cin >> N;

  vector<pair<double, double> > points;

  for(int i = 0; i < N; i++) {
    double x, y;
    cin >> x >> y;

    points.push_back({x, y});
  }

  for(int i = 0; i < N; i++) {
    double x1, y1, x2, y2;
    x1 = points[i].first;
    y1 = points[i].second;
    x2 = points[(i + 1) % N].first;
    y2 = points[(i + 1) % N].second;

    result += x1 * y2 - y1 * x2;
  }

  result = fabs(result) / 2.0;

  cout << fixed << setprecision(1) << result << endl;
  
}