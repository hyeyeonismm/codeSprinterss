/*
BOJ 1541
Greedy
S2
잃어버린 괄호
*/

#include <iostream>
#include <vector>

using namespace std;

int main() {
    string expr;
    cin >> expr;

    vector<int> numbers;
    vector<char> operators;
    string currentNumber = "";

    for (char c : expr) {
        if (isdigit(c)) {
            currentNumber += c;
        } else {
            numbers.push_back(stoi(currentNumber));
            operators.push_back(c);
            currentNumber = "";
        }
    }
    numbers.push_back(stoi(currentNumber));

    int result = numbers[0];
    bool subtractMode = false;

    for (size_t i = 0; i < operators.size(); i++) {
        if (operators[i] == '-') {
            subtractMode = true;
        }
        if (subtractMode) {
            result -= numbers[i + 1];
        } else {
            result += numbers[i + 1];
        }
    }

    cout << result << endl;
    return 0;
}
