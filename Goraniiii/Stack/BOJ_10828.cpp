#include <iostream>
#include <string>

using namespace std;

template <typename T>
class Stack {
  T* data;
  int capacity;
  int length;

public:
  Stack(int n = 100) {
    data = new T[n];
    capacity = n;
    length = -1;
  }
  ~Stack() {
    delete [] data;
  }

  // 백준 memcpy 관련 오류로 주석처리
  // void resize(int new_capacity) {
  //   T* new_stack = new T[new_capacity];
  //   memcpy(new_stack, data, sizeof(T) * (length + 1));
  //   if(data) {
  //     delete [] data;
  //   }
  //   capacity = new_capacity;
  // }

  void push(T newdata) {
    // if(length >= capacity) {
    //   resize(capacity * 2);
    // }
    data[++length] = newdata;
  }

  T pop() {
    if(empty()) {
      return -1;
    }
    return data[length--];
  }

  int size() {
    return length + 1;
  }

  T top() {
    if(length == -1){
      return -1;
    }
    else{
      return data[length];
    }
  }

  bool empty() {
    if(length == -1) {
      return true;
    }
    else {
      return false;
    }
  }

};

int main (){
  int N;
  string line;

  string command;
  int num;

  cin >> N;

  Stack<int> datastack(N);

  for(int i = 0; i < N; i++) {
    cin >> command;
    if(command == "push") {
      cin >> num;
      datastack.push(num);
    }
    else if(command == "pop") {
      cout << datastack.pop() << endl;
    }
    else if(command == "size") {
      cout << datastack.size() << endl;
    }
    else if(command == "empty") {
      // cout << datastack.empty() << endl;
      cout << (datastack.empty() ? 1 : 0) << endl;
    }
    else if(command == "top") {
      cout << datastack.top() << endl;
    }
    else {
      cout << "undefined command" << endl;
    }
  }

  return 0;
}