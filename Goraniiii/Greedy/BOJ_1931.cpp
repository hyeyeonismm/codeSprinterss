/*
BOJ 1931
Greedy
G5
회의실 배정
*/

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool comp(pair<int, int>& a, pair<int, int>& b) {
  if(a.second == b.second) {
    return a.first < b.first;
  }
  else {
    return a.second < b.second;
  }
}

int main() {
  int N;
  cin >> N;

  vector<pair<int, int> > meetings;

  for(int i = 0; i < N; i++) {
    pair<int, int> meeting;
    cin >> meeting.first >> meeting.second;

    meetings.push_back(meeting);
  }

  sort(meetings.begin(), meetings.end(), comp);

  int result = 0;
  int last_end_time = 0;

  for(int i = 0; i < N; i++) {
    int start = meetings[i].first;
    int end = meetings[i].second;

    if(start >= last_end_time) {
      result++;
      last_end_time = end;
    }
  }

  cout << result << endl;

  return 0;

}