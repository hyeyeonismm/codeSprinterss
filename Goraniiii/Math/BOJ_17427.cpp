#include <iostream>
using namespace std;

int main() {
    long long n;
    cin >> n;

    long long sum = 0;

    for (long long k = 1; k <= n; k++) {
        sum += k * (n / k);
    }

    cout << sum << endl;
    return 0;
}
