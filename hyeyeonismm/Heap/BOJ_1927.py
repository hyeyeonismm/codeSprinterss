import sys
import heapq

n = int(sys.stdin.readline())
arr=[]
for _ in range(n):
    x = int(sys.stdin.readline())
    if x!=0:
        heapq.heappush(arr, x)
    else:
        if len(arr)==0:
            print(0)
        else:
            res = heapq.heappop(arr)
            print(res)

