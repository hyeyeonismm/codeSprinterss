#include <iostream>
#include <string>

using namespace std;

class Queue {
    int* data;
    int frontIndex;
    int backIndex;
    int capacity;
public:
    Queue(int size) {
        data = new int[size];
        frontIndex = 0;
        backIndex = 0;
        capacity = size;
    }
    ~Queue() {
        delete[] data;
    }
    void push(int x) {
        data[backIndex++] = x;
    }
    int pop() {
        if (empty()) {
            return -1;
        }
        return data[frontIndex++];
    }
    int size() {
        return backIndex - frontIndex;
    }
    bool empty() {
        return frontIndex == backIndex;
    }
    int front() {
        if (empty()) {
            return -1;
        }
        return data[frontIndex];
    }
    int back() {
        if (empty()) {
            return -1; 
        }
        return data[backIndex - 1];
    }
};
int main() {
    int N;
    cin >> N;
    Queue q(N);
    string command;
    for (int i = 0; i < N; i++) {
        cin >> command;
        if (command == "push") {
            int x;
            cin >> x;
            q.push(x);
        }
        else if (command == "pop") {
            cout << q.pop() << endl;
        }
        else if (command == "size") {
            cout << q.size() << endl;
        }
        else if (command == "empty") {
            cout << (q.empty() ? 1 : 0) << endl;
        }
        else if (command == "front") {
            cout << q.front() << endl;
        }
        else if (command == "back") {
            cout << q.back() << endl;
        }
    }
    return 0;
}