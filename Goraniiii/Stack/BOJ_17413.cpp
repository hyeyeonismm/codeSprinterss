#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
  string input;
  vector<char> word;
  bool inTag = false;
  bool inWord = false;
  string result = "";

  getline(cin, input);

  for(char a : input) {
    if(a == '<') {  // tag 열림
      inTag = true;
      if(inWord) {
        while(!word.empty()) {
          result += word.back();
          word.pop_back();
        }
      }
      inWord = false;
      result += a;
    }
    else if(a == '>') { // tag 닫음
      inTag = false;
      result += a;
    }
    else if(a == ' ') { // 공백
      if(inTag) { // 태그 안에 있는 공백
        result += a;
      }
      else { // 단어가 끝난경우
        if(inWord) {
          while(!word.empty()) {
            result += word.back();
            word.pop_back();
          }
        }
        inWord = false;
        result += a;
      }
    }
    else { // 일반 글자
      if(inTag) { // tag 내인경우 그대로 result에 삽입
        result += a;
      }
      else {  // 외부 word인 경우 stack에 저장
        if(!inWord) {
          inWord = true;
        }
        word.push_back(a);
      }
    }
  }

  if(inWord) {
    while(!word.empty()) {
      result += word.back();
      word.pop_back();
    }
    inWord = false;
  }

  cout << result << endl;
}