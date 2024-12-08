/*
BOJ 14225
Brute Force
S1
부분수열의 합
*/


#include <iostream>
#include <vector>

using namespace std;

const int MAX_SUM = 2000000;
vector<bool> isPossible(MAX_SUM + 1, false);

void findSubsetSums(vector<int>& nums, int index, int currentSum) {
    isPossible[currentSum] = true;

    if (index == nums.size()) {
        return;
    }

    findSubsetSums(nums, index + 1, currentSum);
    findSubsetSums(nums, index + 1, currentSum + nums[index]);
}

int main() {
    int N;
    cin >> N;

    vector<int> nums(N);
    for (int i = 0; i < N; i++) {
        cin >> nums[i];
    }

    findSubsetSums(nums, 0, 0);

    for (int i = 1; i <= MAX_SUM; i++) {
        if (!isPossible[i]) {
            cout << i << endl;
            break;
        }
    }

    return 0;
}
