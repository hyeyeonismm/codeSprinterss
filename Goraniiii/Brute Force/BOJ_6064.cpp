#include <iostream>

using namespace std;

int gcd(int a, int b) {
  while(b) {
    int tmp = b;
    b = a % b;
    a = tmp;
  }

  return a;
}

int lcm(int a, int b) {
  return a / gcd(a, b) * b;
}

int main() {
  int TestCase;
  int M, N;
  int x, y;
  int result;

  cin >> TestCase;

  for(int i = 0; i < TestCase; i++) {
    int a = 1, b = 1;

    cin >> M >> N >> x >> y;

      int l = lcm(M, N);
      int answer = -1;

      for (int k = 0; k < (l / M); ++k) {
        int year = x + k * M;
        if (year > l) break;

      if ((year - 1) % N + 1 == y) {
        answer = year;
        break;
      }
    }

     cout << answer << endl;
  }

}