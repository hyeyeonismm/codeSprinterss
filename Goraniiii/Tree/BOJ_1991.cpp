/*
BOJ 1991
Tree
트리 순회
S1
*/

#include <iostream>
#include <vector>

using namespace std;

struct Node {
    char left, right;
};

vector<Node> tree(26);

void preorder(char node) {
    if (node == '.') return;
    cout << node;
    preorder(tree[node - 'A'].left);
    preorder(tree[node - 'A'].right);
}

void inorder(char node) {
    if (node == '.') return;
    inorder(tree[node - 'A'].left);
    cout << node;
    inorder(tree[node - 'A'].right);
}

void postorder(char node) {
    if (node == '.') return;
    postorder(tree[node - 'A'].left);
    postorder(tree[node - 'A'].right);
    cout << node;
}

int main() {
    int N;
    cin >> N;

    for (int i = 0; i < N; i++) {
        char node, left, right;
        cin >> node >> left >> right;
        tree[node - 'A'].left = left;
        tree[node - 'A'].right = right;
    }

    preorder('A');
    cout << endl;
    inorder('A');
    cout << endl;
    postorder('A');
    cout << endl;

    return 0;
}
