const fs = require("fs");
let input = fs.readFileSync("naarang/input.txt").toString().trim().split("\n");

const [V, E] = input[0].split(" ").map(Number);
const K = parseInt(input[1]);

const graph = {}; // Key: from 정점, value : [{to: 도착 정점, weight: 가중치}]

for (let i = 2; i < E + 2; i++) {
  const [from, to, weight] = input[i].split(" ").map(Number);

  if (!graph[from]) graph[from] = [];
  graph[from].push({ to, weight });
}

// 힙 자료구조
class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].weight <= this.heap[index].weight) {
        break;
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (leftChildIndex < length && this.heap[leftChildIndex].weight < this.heap[smallest].weight) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < length && this.heap[rightChildIndex].weight < this.heap[smallest].weight) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      this.swap(index, smallest);
      index = smallest;
    }
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      // 끝에 있는 노드를 최상위 부모로 만든 후에 정렬
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  getSize() {
    return this.heap.length;
  }
}

const heap = new MinHeap();

// 다익스트라 알고리즘
const dist = new Array(V + 1).fill(Infinity); // 정점 1번부터 시작
dist[K] = 0;
heap.push({ to: K, weight: 0 });

while (!heap.isEmpty()) {
  const { to, weight } = heap.pop();

  graph[to]?.forEach((value) => {
    const { to: nextTo, weight: nextWeight } = value;

    if (dist[nextTo] > weight + nextWeight) {
      dist[nextTo] = weight + nextWeight;
      heap.push({ to: nextTo, weight: dist[nextTo] });
    }
  });
}

let answer = [];

for (let i = 1; i <= V; i++) {
  if (dist[i] == Infinity) answer.push("INF");
  else answer.push(dist[i]);
}

console.log(answer.join("\n"));

/*

단순히 큐를 만들어서 정렬했더니 메모리 초과가 발생 -> heap을 이용해야 함!

*/
