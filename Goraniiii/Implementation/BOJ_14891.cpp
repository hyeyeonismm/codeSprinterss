/*
BOJ 14891
Implementation
톱니바퀴
G5
*/

#include <iostream>
#include <deque>
#include <vector>

using namespace std;

class Wheel {
public:
  deque<int> poles;

  Wheel(string state) {
    for (char c : state) {
      poles.push_back(c - '0');
    }
  }

  void clockwise() {
    poles.push_front(poles.back());
    poles.pop_back();
  }

  void counterclockwise() {
    poles.push_back(poles.front());
    poles.pop_front();
  }

  int getLeft() { 
    return poles[6]; 
  }
  int getRight() {
    return poles[2]; 
  }
};

int main() {
  vector<Wheel> wheels;

  // Initialize wheels
  for (int i = 0; i < 4; i++) {
    string input;
    cin >> input;
    wheels.emplace_back(input);
  }

  int k;
  cin >> k;

  // Rotate k times
  for(int i = 0; i < k; i++) {
    int num, dir;
    cin >> num >> dir;
    num--;  // 1-based index → 0-based

    vector<int> dirs(4, 0);
    dirs[num] = dir;

    for (int j = num; j > 0; j--) {
      if (wheels[j].getLeft() != wheels[j - 1].getRight()) {
        dirs[j - 1] = -dirs[j];
      }
      else {
        break;
      }
    }

    for (int j = num; j < 3; j++) {
      if (wheels[j].getRight() != wheels[j + 1].getLeft()) {
        dirs[j + 1] = -dirs[j];
      }
      else {
        break;
      }
    }

    for (int j = 0; j < 4; j++) {
      if (dirs[j] == 1) {
        wheels[j].clockwise();
      } 
      else if (dirs[j] == -1) {
        wheels[j].counterclockwise();
      }
    }
  }

  // Calculate score
  int score = 0;
  for (int i = 0; i < 4; i++) {
    if (wheels[i].poles[0] == 1) {
      score += (1 << i);
    }
  }

  cout << score << '\n';
  return 0;
}
