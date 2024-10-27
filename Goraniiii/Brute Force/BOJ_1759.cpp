#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

void getPassword(int k, int l, int c, string before, vector<string>& passwords, vector<char>& characters) {
  if(l == 0) {    // 더 이상 찾을 게 없는 경우 검사하고 저장
    int vowels = 0;
    int consonants = 0;

    for (char ch : before) {
      if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
        vowels++;
      }
      else {
        consonants++;
      }
    }

    if (vowels >= 1 && consonants >= 2) {
      passwords.push_back(before);
    }
    return;
  }
  else {  // 찾을 게 있는 경우
    if(c - k < l) {   // 남은 알파벳이 모자란 경우
      return;
    }

    getPassword(k + 1, l - 1, c, before + characters[k], passwords, characters);
    getPassword(k + 1, l, c, before, passwords, characters);
  }


  
}

int main() {
  int L, C;

  cin >> L >> C;

  vector<char> characters(C);

  for(int i = 0; i < C; i++) {
    cin >> characters[i];
  }

  sort(characters.begin(), characters.end());

  vector<string> passwords;

  getPassword(0, L, C, "", passwords, characters);

  for(int i = 0; i < passwords.size(); i++) {
    cout << passwords[i] << endl;
  }



  
}