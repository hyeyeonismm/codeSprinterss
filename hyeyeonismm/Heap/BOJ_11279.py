import heapq
import sys

n = int(sys.stdin.readline()) # 13
arr = []

for _ in range(n):
    x = int(sys.stdin.readline())
    if x ==0:
        if len(arr)==0:
            print(0)
        else:
            res = -(heapq.heappop(arr))
            print(res)
    else:
        heapq.heappush(arr, -x)