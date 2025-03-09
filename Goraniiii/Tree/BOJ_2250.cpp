/*
BOJ 2250
Tree
트리의 부모 찾기
S2
*/

#include <iostream>
#include <vector>

using namespace std;

vector<int> tree[10001];
int depth[10001];
int width[10001];
int maxWidth = 0;
int maxDepth = 0;

void dfs(int node, int dep) {
    depth[node] = dep;
    width[dep]++;
    
    if (width[dep] > maxWidth) {
        maxWidth = width[dep];
        maxDepth = dep;
    }
    
    for (int child : tree[node]) {
        dfs(child, dep + 1);
    }
}

int main() {
    int n;
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        int node, left, right;
        cin >> node >> left >> right;
        
        if (left != -1) {
            tree[node].push_back(left);
        }
        if (right != -1) {
            tree[node].push_back(right);
        }
    }

    dfs(1, 1);

    cout << maxDepth << " " << maxWidth << endl;

    return 0;
}
