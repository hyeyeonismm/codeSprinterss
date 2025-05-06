/*
BOJ 1002
Math(기하)
터렛
S3
*/

#include <iostream>

using namespace std;

int main() {
    int testCase;

    cin >> testCase;

    for(int i = 0; i < testCase; i++) {
        int x1, y1, r1, x2, y2, r2;
        int distance2;

        cin >> x1 >> y1 >> r1 >> x2 >> y2 >> r2;

        distance2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);

        if(distance2 == 0 && r1 == r2) { // 두 원이 겹치는 경우우
            cout << "-1" << endl;
        }
        else if(distance2 > (r1 + r2) * (r1 + r2)) {
            cout << "0" << endl;
        }
        else if(distance2 == (r1 + r2) * (r1 + r2)) {
            cout << "1" << endl;
        }
        else if(distance2 > (r1 - r2) * (r1 - r2)) {
            cout << "2" << endl;
        }
        else if(distance2 == (r1 - r2) * (r1 - r2)) {
            cout << "1" << endl;
        }
        else {
            cout << "0" << endl;
        }
    }
}