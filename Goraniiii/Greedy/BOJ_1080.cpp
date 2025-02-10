/*
BOJ 1080
Greedy
S1
행렬
*/

#include <iostream>
#include <vector>

using namespace std;

int N, M;
vector<vector<int>> A, B;

void flip(int x, int y) {
    for (int i = x; i < x + 3; i++) {
        for (int j = y; j < y + 3; j++) {
            A[i][j] = 1 - A[i][j];  // 0 -> 1, 1 -> 0
        }
    }
}

int main() {
    cin >> N >> M;
    A.resize(N, vector<int>(M));
    B.resize(N, vector<int>(M));

    for (int i = 0; i < N; i++) {
        string row;
        cin >> row;
        for (int j = 0; j < M; j++) {
            A[i][j] = row[j] - '0';
        }
    }

    for (int i = 0; i < N; i++) {
        string row;
        cin >> row;
        for (int j = 0; j < M; j++) {
            B[i][j] = row[j] - '0';
        }
    }

    if (N < 3 || M < 3) {
        cout << (A == B ? 0 : -1) << endl;
        return 0;
    }

    int flipCount = 0;

    for (int i = 0; i <= N - 3; i++) {
        for (int j = 0; j <= M - 3; j++) {
            if (A[i][j] != B[i][j]) {
                flip(i, j);
                flipCount++;
            }
        }
    }

    cout << (A == B ? flipCount : -1) << endl;

    return 0;
}
