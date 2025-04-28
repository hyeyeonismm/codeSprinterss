/*
BOJ 11279
Heap
최대 힙
S2
*/

#include <iostream>

using namespace std;

class Heap {
private:

    int *data;
    int heapCnt;

    void swap(int *a, int *b) {
        int tmp = *a;
        *a = *b;
        *b = tmp;
    }
public:
    Heap(int size = 200001) {
        data = new int[size];
        heapCnt = -1;
    }
    int pop() {
        if (heapCnt == -1) {
            return 0;
        }

        int ret = data[0];
        swap(&data[0], &data[heapCnt]);
        heapCnt--;

        int parent = 0;
        int child = parent * 2 + 1;

        if(child + 1 <= heapCnt) {
            child = (data[child] > data[child + 1]) ? child : child + 1;
        }

        while(child <= heapCnt && data[child] > data[parent]) {
            swap(&data[child], &data[parent]);
            parent = child;
            child = parent * 2 + 1;

            if(child + 1 <= heapCnt) {
                child = (data[child] > data[child + 1]) ? child : child + 1;
            }
        }

        return ret;
    }
    void push(int num) {
        data[++heapCnt] = num;

        int child = heapCnt;
        int parent = (child -  1) / 2;
        
        while(child > 0 && data[child] > data[parent]) {
            swap(&data[child], &data[parent]);
            child = parent;
            parent = (child -  1) / 2;
        }
    };

};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    int x;
    Heap heap;

    cin >> n;

    for(int i = 0; i < n; i++) {
        cin >> x;
        if(x == 0) {
            cout << heap.pop() << "\n";
        }
        else {
            heap.push(x);
        }
    }
}