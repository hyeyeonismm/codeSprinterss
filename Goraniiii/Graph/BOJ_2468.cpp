/*
BOJ 2468
Graph, DFS, BFS
안전영역
S1
*/

#include <iostream>
#include <vector>

using namespace std;


int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};

void visiting(int k, int x, int y, int n, vector<vector<int>>& map, vector<vector<bool>>& visited) {
    visited[x][y] = true;

    for(int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        if((nx >= 0) && (nx < n) && (ny >= 0) && (ny < n)) {
            if(map[nx][ny] > k  && !visited[nx][ny]) {
              visiting(k, nx, ny, n, map, visited);
            }
          }
    }
}

int main () {
    int n;
    cin >> n;
    vector<vector<int>> map(n, vector<int>(n));
    vector<vector<bool>> visited(n, vector<bool>(n, false));

    int result = 0;
    int finalResult = 0;
    int maxHeight = 0;


    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            int height;
            cin >> height;
            map[i][j] = height;
            maxHeight = (maxHeight > height) ? maxHeight :height;
        }
    }

    for(int k = 0; k < maxHeight; k++) {
        visited.assign(n, vector<bool>(n, false));
        result = 0;

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if (map[i][j] > k && !visited[i][j]) {
                    visiting(k, i, j, n, map, visited);
                    result++;
                }
            }
        }
        finalResult = (finalResult > result) ? finalResult : result;
    }


    cout << finalResult << endl;

}