/*
BOJ 5014
BFS
스타트링크
S1
*/

#include <iostream>
#include <queue>
#include <vector>
#include <tuple>

using namespace std;

bool visited[1000001];

int bfs(int floor, int start, int goal, int up, int down) {
  queue<pair<int, int> > q;
  q.push({start, 0});
  visited[start] = true;

  while(!q.empty()) {
    int current, time;
    tie(current, time) = q.front();
    q.pop();

    if(current == goal) {
      return time;
    }

    if(current + up <= floor && !visited[current + up]) {
      visited[current + up] = true;
      q.push({current + up, time + 1});
    }
    if(current - down > 0 && !visited[current - down]) {
      visited[current - down] = true;
      q.push({current - down, time + 1});
    }
  }

  return -1;
}

int main() {
  int F, S, G, U, D;
  int result;

  cin >> F >> S >> G >> U >> D;

  result = bfs(F, S, G, U, D);

  if(result == -1) {
    cout << "use the stairs" << endl;
  }
  else {
    cout << result << endl;
  }

}