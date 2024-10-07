#include <iostream>
#include <vector>

using namespace std;

int onetwothreeadd(int num) {
  vector<int> result(num + 1);

  result[0] = 1;
  result[1] = 1;
  result[2] = 2;

  for(int i = 3; i <= num; i++) {
    result[i] = result[i - 1] + result[i - 2] + result[i - 3];
  }
  
  return result[num];
}

int main() {
  int N;
  int num;

  cin >> N;

  for(int i = 0; i < N; i++) {
    cin >> num;
    cout << onetwothreeadd(num) << endl;

  }

}