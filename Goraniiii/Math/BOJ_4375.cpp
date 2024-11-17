#include <iostream>
using namespace std;

int main() {
    int n;
    while (cin >> n) {
        int remainder = 0;
        int count = 0;

        do {
            remainder = (remainder * 10 + 1) % n;
            count++;
        } while (remainder != 0);

        cout << count << endl;
    }
    return 0;
}
