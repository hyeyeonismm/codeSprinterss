#include <iostream>
#include <vector>

using namespace std;

void flipHori(vector<vector<int> >& matrix) {
  int M = matrix.size();
  int N = matrix[0].size();

  vector<vector<int> > newMatrix(M, vector<int>(N));

  for(int i = 0; i < M; i++) {
     for(int j = 0; j < N; j++) {
     newMatrix[M - i - 1][j] = matrix[i][j];
    } 
  }
  matrix = newMatrix;
}

void flipVert(vector<vector<int> >& matrix) {
  int M = matrix.size();
  int N = matrix[0].size();

  vector<vector<int> > newMatrix(M, vector<int>(N));

  for(int i = 0; i < M; i++) {
    for(int j = 0; j < N; j++) {
      newMatrix[i][N - j - 1] = matrix[i][j];
    } 
  }

  matrix = newMatrix;
}

void rotateClock(vector<vector<int> >& matrix) {
  int M = matrix.size();
  int N = matrix[0].size();

  vector<vector<int> > newMatrix(N, vector<int>(M));

  for(int i = 0; i < M; i++) {
    for(int j = 0; j < N; j++) {
      newMatrix[j][M - i - 1] = matrix[i][j];
    } 
  }
  matrix = newMatrix;
}

void rotateCounterClock(vector<vector<int> >& matrix) {
  int M = matrix.size();
  int N = matrix[0].size();

  vector<vector<int> > newMatrix(N, vector<int>(M));

  for(int i = 0; i < M; i++) {
    for(int j = 0; j < N; j++) {
      newMatrix[N - j - 1][i] = matrix[i][j];
    } 
  }
  matrix = newMatrix;
}

void rotateBlockClock(vector<vector<int> >& matrix) {
  int M = matrix.size();
  int N = matrix[0].size();

  vector<vector<int> > newMatrix(M, vector<int>(N));

  for(int i = 0; i < M / 2; i++) {
    for(int j = 0; j < N / 2; j++) {
      newMatrix[i][j + N / 2] = matrix[i][j];
      newMatrix[i + M / 2][j + N / 2] = matrix[i][j + N / 2];
      newMatrix[i + M / 2][j] = matrix[i + M / 2][j + N / 2];
      newMatrix[i][j] = matrix[i + M / 2][j];
    }
  }
  matrix = newMatrix;
}

void rotateBlockCounterClock(vector<vector<int> >& matrix) {
  int M = matrix.size();
  int N = matrix[0].size();

  vector<vector<int> > newMatrix(M, vector<int>(N));

  for(int i = 0; i < M / 2; i++) {
    for(int j = 0; j < N / 2; j++) {
      newMatrix[i + M / 2][j] = matrix[i][j];
      newMatrix[i][j] = matrix[i][j + N / 2];
      newMatrix[i][j + N / 2] = matrix[i + M / 2][j + N / 2];
      newMatrix[i + M / 2][j + N / 2] = matrix[i + M / 2][j];
    }
  }
  matrix = newMatrix;
}



int main() {
  int N, M, R;
  cin >> M >> N >> R;

  vector<vector<int> > matrix(M, vector<int>(N));
  vector<int> operation(R);

  for(int i = 0; i < M; i++) {
    for(int j = 0; j < N; j++) {
      cin >> matrix[i][j];
    }
  }



  for(int i = 0; i < R; i++) {
    cin >> operation[i];
  }

  for(int i = 0; i < R; i++) {
    switch (operation[i])
    {
    case 1:
      flipHori(matrix);
      break;

    case 2:
      flipVert(matrix);
      break;

    case 3:
      rotateClock(matrix);
      break;

    case 4:
      rotateCounterClock(matrix);
      break;

    case 5:
      rotateBlockClock(matrix);
      break;

    case 6:
      rotateBlockCounterClock(matrix);
      break;

    default:
      cout << "Invalid Operation" << endl;
      break;
    }
  }

  for(int i = 0; i < matrix.size(); i++) {
    for(int j = 0; j < matrix[0].size(); j++) {
      cout << matrix[i][j] << " ";
    }
    cout << "\n";
  }
  

  return 0;

}