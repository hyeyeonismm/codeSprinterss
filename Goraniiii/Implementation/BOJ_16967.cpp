#include <iostream>
#include <vector>

using namespace std;

int main() {
  int H, W;
  int X, Y;

  cin >> H >> W >> X >> Y;

  vector<vector<int> > arrayA(H, vector<int>(W));
  vector<vector<int> > arrayB(H + X, vector<int>(W + Y));

  for(int i = 0; i < H + X; i++) {
    for(int j = 0; j < W + Y; j++) {
      cin >> arrayB[i][j];
    }
  }

  for(int i = 0; i < X; i++) {
    for(int j = 0; j < W; j++) {
      arrayA[i][j] = arrayB[i][j];
    }
  }

  for(int i = X; i < H; i++) {
    for(int j = 0; j < Y; j++) {
      arrayA[i][j] = arrayB[i][j];
    }
  }

  for(int i = X; i < H; i++) {
    for(int j = W; j < W + Y; j++) {
      arrayA[i - X][j - Y] = arrayB[i][j];
    }
  }

  for(int i = H; i < H + X; i++) {
    for(int j = Y; j < W + Y; j++) {
      arrayA[i - X][j - Y] = arrayB[i][j];
    }
  }

  for(int i = X; i < H; i++) {
    for(int j = Y; j < W; j++) {
      arrayA[i][j] = arrayB[i][j] - arrayA[i - X][j - Y];
    }
  }

  for(int i = 0; i < H; i++) {
    for(int j = 0; j < W; j++) {
      cout << arrayA[i][j] << " ";
    }
    cout << "\n";
  }
}